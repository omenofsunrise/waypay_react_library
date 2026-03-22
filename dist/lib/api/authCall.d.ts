export type UserType = string;
export type InitiateCallAuthResponse = {
    call_phone: string;
    check_id: string;
    name_required?: boolean;
} & {
    callPhone?: string;
    checkId?: string;
};
export type ConfirmCallAuthResponse = {
    access_token: string;
    refresh_token: string;
    status: string;
};
export declare const initiateCallAuth: (phone: string, userType: UserType) => Promise<InitiateCallAuthResponse>;
export declare const confirmCallAuth: (phone: string, checkId: string, userType: UserType, name?: string) => Promise<ConfirmCallAuthResponse>;
export declare const getSessionInfo: () => Promise<unknown>;
