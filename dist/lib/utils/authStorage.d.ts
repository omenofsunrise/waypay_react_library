export type SessionInfo = {
    has_pin: boolean;
    client: {
        id: string;
    };
};
export declare const authStorage: {
    isAuthenticated(): Promise<boolean>;
    getSessionInfo(): Promise<SessionInfo | null>;
    logout(): Promise<void>;
    getClientId(): Promise<string | null>;
    hasPin(): Promise<boolean>;
};
export declare const getSessionInfo: () => Promise<SessionInfo | null>;
