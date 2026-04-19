import React, { useState, useEffect, useCallback, useRef } from 'react';
import subscriptionService, { type TariffType } from './subscriptionService';

interface SubscriptionPendingPageProps {
  paymentUrl: string;
  onPaymentComplete?: () => void;
  expiresAt?: string;
  status?: string;
  tariffType?: TariffType;
  onCheckStatus?: () => Promise<{ success: boolean; status?: string; transaction_status?: string }>;
}

const SubscriptionPendingPage: React.FC<SubscriptionPendingPageProps> = ({ 
  paymentUrl, 
  onPaymentComplete,
  expiresAt,
  status: initialStatus,
  tariffType,
  onCheckStatus
}) => {
  const [paymentStep, setPaymentStep] = useState<number>(1);
  const [isCancelling, setIsCancelling] = useState<boolean>(false);
  const [cancelError, setCancelError] = useState<string | null>(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState<boolean>(false);
  const [autoCheckError, setAutoCheckError] = useState<string | null>(null);
  const [currentStatus, setCurrentStatus] = useState<string>(initialStatus || 'Pending');
  const isCheckingRef = useRef(false);
  
  const isMounted = useRef(true);
  const checkIntervalRef = useRef<number | null>(null);
  const timerIntervalRef = useRef<number | null>(null);

  const formatTimeLeft = useCallback((expiryDate: string) => {
    const now = new Date().getTime();
    const expiry = new Date(expiryDate).getTime();
    const difference = expiry - now;

    if (difference <= 0) {
      return '00:00';
    }

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  const updateTimer = useCallback(() => {
    if (expiresAt && paymentStep === 1 && currentStatus === 'Pending') {
      const formatted = formatTimeLeft(expiresAt);
      if (formatted === '00:00') {
        setAutoCheckError('Время ожидания оплаты истекло');
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
          timerIntervalRef.current = null;
        }
      }
    }
  }, [expiresAt, paymentStep, currentStatus, formatTimeLeft]);

  const startTimer = useCallback(() => {
    if (!expiresAt || paymentStep !== 1 || currentStatus !== 'Pending') return;

    updateTimer();

    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    timerIntervalRef.current = window.setInterval(() => {
      if (isMounted.current && paymentStep === 1 && currentStatus === 'Pending') {
        updateTimer();
      }
    }, 1000);
  }, [expiresAt, paymentStep, currentStatus, updateTimer]);

  const stopTimer = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  }, []);

  const stopAutoCheck = useCallback(() => {
    if (checkIntervalRef.current) {
      clearInterval(checkIntervalRef.current);
      checkIntervalRef.current = null;
    }
  }, []);

  const performStatusCheck = useCallback(async () => {
    if (isCheckingRef.current || paymentStep === 3 || currentStatus === 'Active') {
      console.log('Пропуск проверки:', { 
        isChecking: isCheckingRef.current, 
        paymentStep, 
        currentStatus 
      });
      return;
    }

    try {
      isCheckingRef.current = true;
      setAutoCheckError(null);
      
      if (onCheckStatus) {
        const statusResponse = await onCheckStatus();
        
        if (statusResponse.success && statusResponse.status === 'Active') {
          setCurrentStatus('Active');
          setPaymentStep(3);
          stopTimer();
          stopAutoCheck();
          if (onPaymentComplete) {
            onPaymentComplete();
          }
        } else if (statusResponse.status === 'Pending') {
          setCurrentStatus('Pending');
          setPaymentStep(1);
          
          if (statusResponse.transaction_status === 'Authorized') {
            setPaymentStep(2);
          }
        } else if (statusResponse.status === 'Expired') {
          setAutoCheckError('Время ожидания оплаты истекло');
          stopTimer();
          stopAutoCheck();
        }
      }
      
    } catch (error) {
      console.error('Ошибка при проверке статуса:', error);
      setAutoCheckError('Не удалось проверить статус оплаты');
    } finally {
      if (isMounted.current) {
        isCheckingRef.current = false;
      }
    }
  }, [onCheckStatus, onPaymentComplete, currentStatus, stopTimer, stopAutoCheck]);

  useEffect(() => {
    if (paymentStep === 3) {
      const timer = setTimeout(() => {
        if (onPaymentComplete) {
          onPaymentComplete();
        }
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [paymentStep, onPaymentComplete]);

  const startAutoCheck = useCallback(() => {
    if (checkIntervalRef.current || currentStatus === 'Active') {
      return;
    }
    
    performStatusCheck();
    
    checkIntervalRef.current = window.setInterval(() => {
      if (isMounted.current && currentStatus !== 'Active') {
        performStatusCheck();
      }
    }, 5000);
    
  }, [performStatusCheck, currentStatus]);

  useEffect(() => {
    isMounted.current = true;

    if (currentStatus === 'Active') {
      setPaymentStep(3);
    } else if (currentStatus === 'Pending') {
      startAutoCheck();
      startTimer();
    }

    return () => {
      isMounted.current = false;
      stopAutoCheck();
      stopTimer();
    };
  }, [currentStatus, startAutoCheck, startTimer, stopAutoCheck, stopTimer]);

  useEffect(() => {
    if (paymentStep === 1 && currentStatus === 'Pending') {
      startTimer();
    } else {
      stopTimer();
    }
  }, [paymentStep, currentStatus, startTimer, stopTimer]);

  const getStepStatus = (step: number) => {
    if (paymentStep > step) return 'completed';
    if (paymentStep === step) return 'current';
    return 'pending';
  };

  const handleCancelSubscription = async () => {
    try {
      // Передаем tariffType при отмене, если он указан
      await subscriptionService.cancelSubscription(tariffType);
      setIsCancelling(true);
      setCancelError(null);
      
      stopAutoCheck();
      stopTimer();
      window.location.reload();
    } catch (error) {
      console.error('Ошибка при отмене подписки:', error);
      setCancelError('Произошла ошибка при отмене подписки');
    } finally {
      setIsCancelling(false);
      setShowCancelConfirm(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '12px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '24px 16px',

        position: 'relative',
        margin: '12px 0'
      }}>
        {!showCancelConfirm && (
          <button
            onClick={() => setShowCancelConfirm(true)}
            className="desktop-cancel-button"
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: 'transparent',
              color: '#999',
              border: '1px solid #ddd',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              zIndex: 10,
              minHeight: '36px',
              minWidth: '80px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
              e.currentTarget.style.color = '#666';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#999';
            }}
          >
            ✕ Отменить
          </button>
        )}

        {showCancelConfirm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '16px',
            boxSizing: 'border-box'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '24px 20px',
              maxWidth: '400px',
              width: '100%',
              textAlign: 'center',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}>
              <h3 style={{ 
                color: '#333', 
                marginBottom: '12px',
                fontSize: '20px',
                lineHeight: '1.4'
              }}>
                Отменить оформление?
              </h3>

              <p style={{ 
                color: '#666', 
                marginBottom: '24px',
                fontSize: '15px',
                lineHeight: '1.5'
              }}>
                Вы уверены, что хотите отменить оформление подписки? 
                Вам придется начать заново.
              </p>

              {cancelError && (
                <div style={{
                  backgroundColor: '#FFEBEE',
                  color: '#F44336',
                  padding: '12px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  fontSize: '14px'
                }}>
                  {cancelError}
                </div>
              )}

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <button
                  onClick={handleCancelSubscription}
                  disabled={isCancelling}
                  style={{
                    width: '100%',
                    backgroundColor: '#F44336',
                    color: 'white',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: isCancelling ? 'not-allowed' : 'pointer',
                    opacity: isCancelling ? 0.7 : 1,
                    transition: 'background-color 0.3s',
                    minHeight: '48px'
                  }}
                  onMouseEnter={(e) => {
                    if (!isCancelling) {
                      e.currentTarget.style.backgroundColor = '#D32F2F';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isCancelling) {
                      e.currentTarget.style.backgroundColor = '#F44336';
                    }
                  }}
                >
                  {isCancelling ? 'Отмена...' : 'Да, отменить'}
                </button>

                <button
                  onClick={() => {
                    setShowCancelConfirm(false);
                    setCancelError(null);
                  }}
                  disabled={isCancelling}
                  style={{
                    width: '100%',
                    backgroundColor: '#f5f5f5',
                    color: '#666',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    cursor: isCancelling ? 'not-allowed' : 'pointer',
                    opacity: isCancelling ? 0.5 : 1,
                    transition: 'background-color 0.3s',
                    minHeight: '48px'
                  }}
                  onMouseEnter={(e) => {
                    if (!isCancelling) {
                      e.currentTarget.style.backgroundColor = '#e0e0e0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isCancelling) {
                      e.currentTarget.style.backgroundColor = '#f5f5f5';
                    }
                  }}
                >
                  Нет, вернуться
                </button>
              </div>
            </div>
          </div>
        )}

        <div style={{ 
          textAlign: 'center', 
          marginBottom: '24px',
        }}>
          <h1 style={{ 
            color: '#333', 
            marginBottom: '8px',
            fontSize: '24px',
            lineHeight: '1.3',
            padding: '0 8px'
          }}>
            {paymentStep === 1 && currentStatus === 'Pending' && 'Ожидание оплаты'}
            {paymentStep === 2 && 'Подтверждение платежа'}
            {paymentStep === 3 && 'Платёж завершён'}
          </h1>

          <p style={{ 
            color: '#666', 
            fontSize: '15px',
            lineHeight: '1.5',
            padding: '0 12px',
            margin: 0
          }}>
            {paymentStep === 1 && currentStatus === 'Pending' && 'Мы перенаправили вас на страницу оплаты. Пожалуйста, завершите платеж.'}
            {paymentStep === 2 && 'Платёж обрабатывается банком. Обычно это занимает несколько секунд.'}
            {paymentStep === 3 && 'Подписка успешно активирована! Спасибо за покупку.'}
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '32px',
          position: 'relative',
          padding: '0 4px'
        }}>
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '18%',
            right: '18%',
            height: '2px',
            backgroundColor: '#E0E0E0',
            zIndex: 1
          }}>
            <div style={{
              width: paymentStep === 1 ? '0%' : paymentStep === 2 ? '50%' : '100%',
              height: '100%',
              backgroundColor: '#007D88',
              transition: 'width 0.5s ease'
            }} />
          </div>

          <div style={{ 
            textAlign: 'center', 
            position: 'relative', 
            zIndex: 2,
            flex: 1
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: getStepStatus(1) === 'completed' ? '#007D88' : 
                             getStepStatus(1) === 'current' ? '#007D88' : '#E0E0E0',
              border: getStepStatus(1) === 'current' ? '3px solid #007D88' : 'none',
              margin: '0 auto 8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {getStepStatus(1) === 'completed' ? '✓' : '1'}
            </div>
            <div style={{
              color: getStepStatus(1) === 'current' ? '#007D88' : '#999',
              fontSize: '11px',
              fontWeight: getStepStatus(1) === 'current' ? 'bold' : 'normal'
            }}>
              Начало
            </div>
          </div>

          <div style={{ 
            textAlign: 'center', 
            position: 'relative', 
            zIndex: 2,
            flex: 1
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: getStepStatus(2) === 'completed' ? '#007D88' : 
                             getStepStatus(2) === 'current' ? 'white' : '#E0E0E0',
              border: getStepStatus(2) === 'current' ? '3px solid #007D88' : 'none',
              margin: '0 auto 8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: getStepStatus(2) === 'current' ? '#007D88' : 
                     getStepStatus(2) === 'completed' ? 'white' : '#999',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {getStepStatus(2) === 'completed' ? '✓' : '2'}
            </div>
            <div style={{
              color: getStepStatus(2) === 'current' ? '#007D88' : '#999',
              fontSize: '11px',
              fontWeight: getStepStatus(2) === 'current' ? 'bold' : 'normal'
            }}>
              Подтверждение
            </div>
          </div>

          <div style={{ 
            textAlign: 'center', 
            position: 'relative', 
            zIndex: 2,
            flex: 1
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: getStepStatus(3) === 'completed' ? '#007D88' : 
                             getStepStatus(3) === 'current' ? 'white' : '#E0E0E0',
              border: getStepStatus(3) === 'current' ? '3px solid #007D88' : 'none',
              margin: '0 auto 8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: getStepStatus(3) === 'current' ? '#007D88' : 
                     getStepStatus(3) === 'completed' ? 'white' : '#999',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {getStepStatus(3) === 'completed' ? '✓' : '3'}
            </div>
            <div style={{
              color: getStepStatus(3) === 'current' ? '#007D88' : '#999',
              fontSize: '11px',
              fontWeight: getStepStatus(3) === 'current' ? 'bold' : 'normal'
            }}>
              Завершено
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#F9FAFA',
          borderRadius: '12px',
          padding: '20px 16px',
          marginBottom: '24px'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ 
              color: '#999', 
              fontSize: '13px', 
              marginBottom: '8px' 
            }}>
              Ссылка для оплаты
            </div>
            <a 
              href={paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#007D88',
                textDecoration: 'none',
                fontSize: '14px',
                wordBreak: 'break-all',
                display: 'block',
                padding: '12px 16px',
                backgroundColor: '#E8F4F5',
                borderRadius: '8px',
                transition: 'background-color 0.3s',
                lineHeight: '1.5',
                minHeight: '44px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D1E9EB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E8F4F5';
              }}
            >
              {paymentUrl}
            </a>
          </div>

          {paymentStep === 1 && (
            <div style={{
              borderTop: '1px solid #E0E0E0',
              paddingTop: '16px'
            }}>
              {!showCancelConfirm && (
                <button
                  onClick={() => setShowCancelConfirm(true)}
                  className="mobile-cancel-button"
                  style={{
                    width: '100%',
                    margin: '16px 0 0px 0px',
                    backgroundColor: '#F44336',
                    color: 'white',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    zIndex: 10,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D32F2F';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F44336';
                  }}
                >
                  ✕ Отменить оформление
                </button>
              )}
            </div>
          )}
        </div>

        {autoCheckError && paymentStep !== 3 && currentStatus !== 'Active' && (
          <div style={{
            backgroundColor: '#FFEBEE',
            color: '#F44336',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '16px',
            fontSize: '14px',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>
            {autoCheckError}
          </div>
        )}

        {paymentStep === 2 && (
          <div style={{
            marginTop: '24px',
            padding: '16px',
            backgroundColor: '#F9FAFA',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <p style={{ 
              color: '#007D88', 
              fontSize: '14px',
              margin: 0,
              lineHeight: '1.5'
            }}>
              Платёж обрабатывается банком. Это может занять от нескольких секунд до часа.
            </p>
          </div>
        )}

        {currentStatus === 'Active' && paymentStep !== 3 && (
          <div style={{
            marginTop: '24px',
            padding: '16px',
            backgroundColor: '#E8F5E9',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <p style={{ 
              color: '#2E7D32', 
              fontSize: '14px',
              margin: 0,
              lineHeight: '1.5'
            }}>
              Подписка активна! Страница будет обновлена автоматически.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        @media (min-width: 769px) {
          .mobile-cancel-button {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .desktop-cancel-button {
            display: none !important;
          }
          
          .mobile-cancel-button {
            display: block !important;
          }
          
          * {
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }
        }
      `}</style>
    </div>
  );
};

export default SubscriptionPendingPage;