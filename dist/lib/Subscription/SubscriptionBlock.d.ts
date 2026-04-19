import React from 'react';
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
declare const SubscriptionBlock: React.FC<SubscriptionBlockProps>;
export default SubscriptionBlock;
