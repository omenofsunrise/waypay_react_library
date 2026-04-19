export type TariffType = 'WaypayCrm' | 'LoanApplication';
export interface CreateSubscriptionRequest {
    tariffType: TariffType;
    days?: number | null;
    ones?: number | null;
}
export interface CreateSubscriptionResponse {
    subscriptionId: string;
    paymentUrl: string;
}
export interface CancelSubscriptionRequest {
    tariffType?: TariffType;
}
export interface CancelSubscriptionResponse {
    status: string;
    transactionStatus: string;
    expiresAt: string | null;
    endAt: string | null;
}
export interface SubscriptionStatusResponse {
    status: string;
    transactionStatus: string;
    isActive: boolean;
    endAt: string | null;
    expiresAt: string | null;
    totalOnes: number;
    leftOnes: number;
    url: string;
}
declare class SubscriptionService {
    /**
     * Создать подписку
     * @param tariffType - тип тарифа
     * @param days - количество дней (опционально)
     * @param ones - количество "ones" (опционально)
     * @returns Promise с данными подписки и ссылкой на оплату
     */
    subscribe(tariffType: TariffType, days?: number | null, ones?: number | null): Promise<CreateSubscriptionResponse>;
    /**
     * Отменить подписку
     * @param tariffType - тип тарифа (опционально, по умолчанию WaypayCrm)
     * @returns Promise с информацией об отмене
     */
    cancelSubscription(tariffType?: TariffType): Promise<CancelSubscriptionResponse>;
    /**
     * Получить информацию о текущей подписке
     * @param tariffType - тип тарифа (опционально, по умолчанию WaypayCrm)
     * @returns Promise с информацией о подписке
     */
    getSubscriptionInfo(tariffType?: TariffType): Promise<SubscriptionStatusResponse>;
    /**
     * Проверить активна ли подписка
     * @param tariffType - тип тарифа (опционально)
     * @returns boolean - активна ли подписка
     */
    isSubscriptionActive(tariffType?: TariffType): Promise<boolean>;
    /**
     * Получить дату окончания подписки
     * @param tariffType - тип тарифа (опционально)
     * @returns string | null - дата окончания или null
     */
    getSubscriptionEndDate(tariffType?: TariffType): Promise<string | null>;
}
declare const _default: SubscriptionService;
export default _default;
