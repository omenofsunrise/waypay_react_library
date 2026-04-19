import React, { useState } from 'react';
import styled from 'styled-components';
import useSubscription from './useSubscription';
import type { TariffType } from './subscriptionService';

export type SubscriptionType = 'days' | 'ones';

export interface SubscriptionPlan {
  id: string | number;
  label: string;
  price: number;
  days?: number;
  ones?: number;
  description?: string;
  popular?: boolean;
}

interface SubscriptionBlockProps {
  tariffType?: TariffType;
  subscriptionType?: SubscriptionType;
  plans?: SubscriptionPlan[];
  onPaymentSuccess?: () => void;
  onError?: (error: string) => void;
  autoRedirect?: boolean;
  buttonText?: string;
  loadingText?: string;
  showSelectedIndicator?: boolean;
  className?: string;
  title?: string;
  subTitle?: string;
}

const defaultPlans: SubscriptionPlan[] = [
  { id: 1, days: 30, label: '1 месяц', price: 4999 },
  { id: 2, days: 90, label: '3 месяца', price: 14999 },
  { id: 3, days: 180, label: '6 месяцев', price: 29999 },
  { id: 4, days: 365, label: '1 год', price: 59999, popular: true },
];

const defaultOnesPlans: SubscriptionPlan[] = [
  { id: 1, ones: 1, label: 'Разовый доступ', price: 999, description: '1 разовое использование' },
  { id: 2, ones: 5, label: 'Пакет 5 раз', price: 4499, description: '5 разовых использований', popular: true },
  { id: 3, ones: 10, label: 'Пакет 10 раз', price: 8499, description: '10 разовых использований' },
  { id: 4, ones: 20, label: 'Пакет 20 раз', price: 15999, description: '20 разовых использований' },
];

const SubscriptionBlock: React.FC<SubscriptionBlockProps> = ({
  tariffType = 'WaypayCrm',
  subscriptionType = 'days',
  plans: customPlans,
  onPaymentSuccess,
  onError,
  autoRedirect = true,
  buttonText = 'Оформить',
  loadingText = 'Обработка...',
  showSelectedIndicator = true,
  className,
  title = 'Подписка',
  subTitle = 'WayPay CRM',
}) => {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  
  const plans = customPlans || (subscriptionType === 'days' ? defaultPlans : defaultOnesPlans);
  
  const { isLoading, error, subscribe, resetState } = useSubscription({
    tariffType,
    autoRedirect,
    onSuccess: (result) => {
      if (autoRedirect && result.paymentUrl) {
        window.location.href = result.paymentUrl;
      }
      onPaymentSuccess?.();
    },
    onError: (err) => {
      onError?.(err);
    },
  });

  React.useEffect(() => {
    if (!selectedPlan && plans.length > 0) {
      const defaultPlan = plans.find(plan => plan.popular) || plans[0];
      setSelectedPlan(defaultPlan);
    }
  }, [plans, selectedPlan]);

  const handleConfirmSubscribe = async () => {
    if (!selectedPlan) {
      onError?.('Выберите тарифный план');
      return;
    }

    const days = subscriptionType === 'days' ? selectedPlan.days : undefined;
    const ones = subscriptionType === 'ones' ? selectedPlan.ones : undefined;

    await subscribe(tariffType, days, ones);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const getPlanValue = (plan: SubscriptionPlan) => {
    if (subscriptionType === 'days') return plan.days;
    return plan.ones;
  };

  return (
    <Container className={className}>
      <Header>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
      </Header>

      {(error || (typeof error === 'string' && error)) && (
        <ErrorBanner>
          <span>{error}</span>
          <CloseButton onClick={resetState}>×</CloseButton>
        </ErrorBanner>
      )}

      <PlansList>
        {plans.map((plan) => {
          const planValue = getPlanValue(plan);
          const isSelected = selectedPlan?.id === plan.id;
          
          return (
            <PlanCard
              key={plan.id}
              $isSelected={isSelected}
              $isPopular={!!plan.popular}
              onClick={() => setSelectedPlan(plan)}
            >
              <PlanInfo>
                <PlanLabel>
                  {plan.label}
                  {plan.popular && <PopularBadge>Популярный</PopularBadge>}
                </PlanLabel>
                {plan.description && (
                  <PlanDescription>{plan.description}</PlanDescription>
                )}
                {planValue !== undefined && subscriptionType === 'days' && (
                  <PlanDetail>{planValue} дней</PlanDetail>
                )}
                {planValue !== undefined && subscriptionType === 'ones' && (
                  <PlanDetail>{planValue} шт.</PlanDetail>
                )}
              </PlanInfo>
              
              <PlanPrice>{formatPrice(plan.price)} ₽</PlanPrice>
              
              {showSelectedIndicator && isSelected && <SelectedIndicator />}
            </PlanCard>
          );
        })}
      </PlansList>

      <SubscribeButton onClick={handleConfirmSubscribe} disabled={isLoading}>
        {isLoading ? loadingText : buttonText}
      </SubscribeButton>
    </Container>
  );
};

const Container = styled.div`
  background: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);
  border: 1px solid #f0f0f0;
  height: fit-content;
  position: sticky;
  top: 20px;

  @media (max-width: 900px) {
    position: static;
  }
`;

const Header = styled.div`
  margin-bottom: 28px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #8c8c8c;
  margin: 0;
`;

const PlansList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`;

const PlanCard = styled.div<{ $isSelected: boolean; $isPopular?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${props => props.$isSelected ? '#f8f9fa' : 'white'};
  border: 2px solid ${props => {
    if (props.$isSelected) return '#007D88';
    if (props.$isPopular) return '#FFD700';
    return '#e8e8e8';
  }};
  position: relative;

  &:hover {
    border-color: #007D88;
    background: #f8f9fa;
    transform: translateX(2px);
  }
`;

const PlanInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const PlanLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
`;

const PopularBadge = styled.span`
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #fff;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;

const PlanDescription = styled.div`
  font-size: 12px;
  color: #8c8c8c;
`;

const PlanDetail = styled.div`
  font-size: 11px;
  color: #007D88;
  font-weight: 500;
`;

const PlanPrice = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #007D88;
`;

const SelectedIndicator = styled.div`
  position: absolute;
  right: -1px;
  top: -1px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent #007D88 transparent transparent;
  border-radius: 0 12px 0 0;
`;

const SubscribeButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #007D88;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #006b74;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fee;
  color: #e53935;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 13px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #e53935;
  font-size: 20px;
  cursor: pointer;
  padding: 0 4px;
`;

export default SubscriptionBlock;