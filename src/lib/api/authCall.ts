import { apiRequest } from './client';

export type UserType = string;

export type InitiateCallAuthResponse = {
  call_phone: string;
  check_id: string;
  name_required?: boolean;
};

export type ConfirmCallAuthResponse = {
  access_token: string;
  refresh_token: string;
  status: string;
};

export const initiateCallAuth = (
  phone: string, 
  userType: UserType,
) => {
  const body: any = {
    phone,
    user_type: userType,
  };
  
  return apiRequest<InitiateCallAuthResponse>('/auth/call/initiate', {
    method: 'POST',
    body,
  });
};

export const confirmCallAuth = (phone: string, checkId: string, userType: UserType, name?: string) =>
  apiRequest<ConfirmCallAuthResponse>('/auth/call/confirm', {
    method: 'POST',
    body: {
      phone,
      check_id: checkId,
      user_type: userType,
      name: name
    },
  });

export const getSessionInfo = () =>
  apiRequest(`/auth/session/info`, { method: 'GET'});