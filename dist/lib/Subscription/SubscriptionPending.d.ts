import React from 'react';
import { type TariffType } from './subscriptionService';
interface SubscriptionPendingPageProps {
    paymentUrl: string;
    onPaymentComplete?: () => void;
    expiresAt?: string;
    status?: string;
    tariffType?: TariffType;
    onCheckStatus?: () => Promise<{
        success: boolean;
        status?: string;
        transaction_status?: string;
    }>;
}
declare const SubscriptionPendingPage: React.FC<SubscriptionPendingPageProps>;
export default SubscriptionPendingPage;
