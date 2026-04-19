import { apiRequest } from "../api/client";

export type TariffType = 'WaypayCrm' | 'LoanApplication'

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
}

class SubscriptionService {
  /**
   * Создать подписку
   * @param tariffType - тип тарифа
   * @param days - количество дней (опционально)
   * @param ones - количество "ones" (опционально)
   * @returns Promise с данными подписки и ссылкой на оплату
   */
  async subscribe(
    tariffType: TariffType, 
    days?: number | null, 
    ones?: number | null
  ): Promise<CreateSubscriptionResponse> {
    const requestBody: CreateSubscriptionRequest = {
      tariffType,
      days: days ?? null,
      ones: ones ?? null
    };

    return apiRequest<CreateSubscriptionResponse>('/Pay/subscribe', {
      method: 'POST',
      body: requestBody
    });
  }

  /**
   * Отменить подписку
   * @param tariffType - тип тарифа (опционально, по умолчанию WaypayCrm)
   * @returns Promise с информацией об отмене
   */
  async cancelSubscription(tariffType?: TariffType): Promise<CancelSubscriptionResponse> {
    const requestBody: CancelSubscriptionRequest = {};
    if (tariffType !== undefined) {
      requestBody.tariffType = tariffType;
    }

    return apiRequest<CancelSubscriptionResponse>('/Pay/cancel', {
      method: 'POST',
      body: requestBody
    });
  }

  /**
   * Получить информацию о текущей подписке
   * @param tariffType - тип тарифа (опционально, по умолчанию WaypayCrm)
   * @returns Promise с информацией о подписке
   */
  async getSubscriptionInfo(tariffType?: TariffType): Promise<SubscriptionStatusResponse> {
    let url = '/Pay/status';
    if (tariffType !== undefined) {
      url += `?tariffType=${tariffType}`;
    }
    
    return apiRequest<SubscriptionStatusResponse>(url, {
      method: 'GET'
    });
  }

  /**
   * Проверить активна ли подписка
   * @param tariffType - тип тарифа (опционально)
   * @returns boolean - активна ли подписка
   */
  async isSubscriptionActive(tariffType?: TariffType): Promise<boolean> {
    const status = await this.getSubscriptionInfo(tariffType);
    return status.isActive;
  }

  /**
   * Получить дату окончания подписки
   * @param tariffType - тип тарифа (опционально)
   * @returns string | null - дата окончания или null
   */
  async getSubscriptionEndDate(tariffType?: TariffType): Promise<string | null> {
    const status = await this.getSubscriptionInfo(tariffType);
    return status.endAt;
  }
}

export default new SubscriptionService();