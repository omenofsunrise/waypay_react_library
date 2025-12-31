import { apiRequest } from './client';

export type UserType = string;

export type InitiateCallAuthResponse = {
  call_phone: string;
  check_id: string;
};

export type ConfirmCallAuthResponse = {
  access_token: string;
  refresh_token: string;
  status: string;
};

export const initiateCallAuth = (phone: string, userType: UserType) =>
  apiRequest<InitiateCallAuthResponse>('/auth/call/initiate', {
    method: 'POST',
    body: {
      phone,
      user_type: userType,
    },
  });

export const confirmCallAuth = (phone: string, checkId: string, userType: UserType) =>
  apiRequest<ConfirmCallAuthResponse>('/auth/call/confirm', {
    method: 'POST',
    body: {
      phone,
      check_id: checkId,
      user_type: userType,
    },
  });
