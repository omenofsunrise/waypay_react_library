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

export const normalizeInitiateCallAuthResponse = (data: any): InitiateCallAuthResponse => {
  return {
    call_phone: data.call_phone ?? data.callPhone,
    check_id: data.check_id ?? data.checkId,
    name_required: data.name_required ?? data.nameRequired,
  };
};

export const initiateCallAuth = async (
  phone: string, 
  userType: UserType,
): Promise<InitiateCallAuthResponse> => {
  const body: any = {
    phone,
    user_type: userType,
  };
  
  const response = await apiRequest<any>('/auth/call/initiate', {
    method: 'POST',
    body,
  });
  
  return normalizeInitiateCallAuthResponse(response);
};

export const confirmCallAuth = (phone: string, checkId: string, userType: UserType, name?: string) =>
  apiRequest<ConfirmCallAuthResponse>('/auth/call/confirm', {
    method: 'POST',
    body: {
      phone,
      check_id: checkId,
      checkId: checkId,
      user_type: userType,
      userType: userType,
      name: name
    },
  });

export const getSessionInfo = () =>
  apiRequest(`/auth/session/info`, { method: 'GET'});