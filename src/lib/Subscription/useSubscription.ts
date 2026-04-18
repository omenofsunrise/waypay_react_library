import { useState, useCallback } from 'react';
import type { 
  CancelSubscriptionResponse, 
  CreateSubscriptionResponse,
  SubscriptionStatusResponse,
  TariffType,
} from './subscriptionService';
import subscriptionService from './subscriptionService';

interface UseSubscriptionOptions {
  tariffType?: TariffType;
  autoRedirect?: boolean;
  openInNewTab?: boolean;
  onSuccess?: (data: CreateSubscriptionResponse) => void;
  onCancel?: (data: CancelSubscriptionResponse) => void;
  onError?: (error: string) => void;
}

interface UseSubscriptionReturn {
  isLoading: boolean;
  isSubscribing: boolean;
  isCancelling: boolean;
  isFetchingStatus: boolean;
  error: string | null;
  subscriptionData: CreateSubscriptionResponse | null;
  cancelData: CancelSubscriptionResponse | null;
  statusData: SubscriptionStatusResponse | null;
  isActive: boolean;
  subscribe: (tariffType: TariffType, days?: number | null, ones?: number | null) => Promise<CreateSubscriptionResponse | null>;
  cancelSubscription: (tariffType?: TariffType) => Promise<CancelSubscriptionResponse | null>;
  getSubscriptionStatus: (tariffType?: TariffType) => Promise<SubscriptionStatusResponse | null>;
  resetState: () => void;
}

const useSubscription = (options: UseSubscriptionOptions = {}): UseSubscriptionReturn => {
  const {
    tariffType,
    autoRedirect = false,
    onSuccess,
    onCancel,
    onError,
  } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isFetchingStatus, setIsFetchingStatus] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [subscriptionData, setSubscriptionData] = useState<CreateSubscriptionResponse | null>(null);
  const [cancelData, setCancelData] = useState<CancelSubscriptionResponse | null>(null);
  const [statusData, setStatusData] = useState<SubscriptionStatusResponse | null>(null);
  const [isActive, setIsActive] = useState(false);

  /**
   * Создание подписки с указанием типа тарифа
   * @param tariffType - тип тарифа
   * @param days - количество дней (опционально)
   * @param ones - количество ones (опционально)
   */
  const subscribe = useCallback(async (
    tariffType: TariffType, 
    days?: number | null, 
    ones?: number | null
  ): Promise<CreateSubscriptionResponse | null> => {
    setIsSubscribing(true);
    setIsLoading(true);
    setError(null);
    setSubscriptionData(null);
    
    try {
      const result = await subscriptionService.subscribe(tariffType, days, ones);
      setSubscriptionData(result);
      
      if (autoRedirect && result.paymentUrl) {
        window.location.href = result.paymentUrl;
      }
      
      onSuccess?.(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      onError?.(errorMessage);
      return null;
    } finally {
      setIsSubscribing(false);
      setIsLoading(false);
    }
  }, [autoRedirect, onSuccess, onError]);

  /**
   * Отмена подписки
   * @param customTariffType - тип тарифа (опционально, если не указан, используется из options)
   */
  const cancelSubscription = useCallback(async (customTariffType?: TariffType): Promise<CancelSubscriptionResponse | null> => {
    setIsCancelling(true);
    setIsLoading(true);
    setError(null);
    setCancelData(null);
    
    try {
      const targetTariffType = customTariffType ?? tariffType;
      const result = await subscriptionService.cancelSubscription(targetTariffType);
      setCancelData(result);
      onCancel?.(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      onError?.(errorMessage);
      return null;
    } finally {
      setIsCancelling(false);
      setIsLoading(false);
    }
  }, [tariffType, onCancel, onError]);

  /**
   * Получение статуса подписки
   * @param customTariffType - тип тарифа (опционально)
   */
  const getSubscriptionStatus = useCallback(async (customTariffType?: TariffType): Promise<SubscriptionStatusResponse | null> => {
    setIsFetchingStatus(true);
    setError(null);
    
    try {
      const targetTariffType = customTariffType ?? tariffType;
      const result = await subscriptionService.getSubscriptionInfo(targetTariffType);
      setStatusData(result);
      setIsActive(result.isActive);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      onError?.(errorMessage);
      return null;
    } finally {
      setIsFetchingStatus(false);
    }
  }, [tariffType, onError]);

  /**
   * Сброс состояния
   */
  const resetState = useCallback(() => {
    setIsLoading(false);
    setIsSubscribing(false);
    setIsCancelling(false);
    setIsFetchingStatus(false);
    setError(null);
    setSubscriptionData(null);
    setCancelData(null);
    setStatusData(null);
    setIsActive(false);
  }, []);

  return {
    isLoading,
    isSubscribing,
    isCancelling,
    isFetchingStatus,
    error,
    subscriptionData,
    cancelData,
    statusData,
    isActive,
    subscribe,
    cancelSubscription,
    getSubscriptionStatus,
    resetState,
  };
};

export default useSubscription;