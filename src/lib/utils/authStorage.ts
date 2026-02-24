import { apiRequest } from "../api/client";

export type SessionInfo = {
  has_pin: boolean;
  client: {
    id: string;
  };
};

export const authStorage = {
  async isAuthenticated(): Promise<boolean> {
    try {
      const sessionInfo = await this.getSessionInfo();
      return !!sessionInfo?.client?.id;
    } catch {
      return false;
    }
  },

  async getSessionInfo(): Promise<SessionInfo | null> {
    try {
      return await apiRequest<SessionInfo>('/auth/session/info', { 
        method: 'GET' 
      });
    } catch (error) {
      return null;
    }
  },

  async logout(): Promise<void> {
    try {
      await apiRequest('/auth/session/revoke', {
        method: 'POST',
      });
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  async getClientId(): Promise<string | null> {
    const sessionInfo = await this.getSessionInfo();
    return sessionInfo?.client?.id || null;
  },

  async hasPin(): Promise<boolean> {
    const sessionInfo = await this.getSessionInfo();
    return sessionInfo?.has_pin || false;
  },
};

export const getSessionInfo = () => authStorage.getSessionInfo();