export type UserType = string;
export type AuthWay = 'CallCheck' | 'WhatsAppCode';
export type InitiateCallAuthResponse = {
    call_phone: string;
    check_id: string;
    name_required?: boolean;
};
export type ConfirmCallAuthResponse = {
    access_token: string;
    accessToken: string;
    refresh_token: string;
    refreshToken: string;
    status: string;
};
export declare const normalizeInitiateCallAuthResponse: (data: any) => InitiateCallAuthResponse;
export declare const initiateCallAuth: (phone: string, userType: UserType, authWay?: AuthWay) => Promise<InitiateCallAuthResponse>;
export declare const confirmCallAuth: (phone: string, checkId: string, userType: UserType, name?: string, authWay?: AuthWay) => Promise<ConfirmCallAuthResponse>;
export declare const getSessionInfo: () => Promise<unknown>;
