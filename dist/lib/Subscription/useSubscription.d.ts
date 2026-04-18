import type { CancelSubscriptionResponse, CreateSubscriptionResponse, SubscriptionStatusResponse, TariffType } from './subscriptionService';
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
declare const useSubscription: (options?: UseSubscriptionOptions) => UseSubscriptionReturn;
export default useSubscription;
