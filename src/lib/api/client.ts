// Centralized API base so all requests target the same backend
import { API_BASE_URL } from './config';

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
  token?: string;
  withCredentials?: boolean;
};

export async function apiRequest<T = unknown>(endpoint: string, options: RequestOptions = {}) {
  const { 
    method = 'GET', 
    body, 
    headers = {}, 
    token,
    withCredentials = true
  } = options;

  const performRequest = async (jwt?: string) => {
    const finalHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers,
    };

    if (jwt) {
      finalHeaders.Authorization = `Bearer ${jwt}`;
    }

    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      method,
      headers: finalHeaders,
      body: body ? JSON.stringify(body) : undefined,
      credentials: withCredentials ? 'include' : 'same-origin',
    });

    return response;
  };

  const tryRequest = async (jwt?: string, allowRefresh = true): Promise<T> => {
    const response = await performRequest(jwt);

    if (response.ok) {
      if (response.status === 204) {
        return null as T;
      }

      const text = await response.text();
      if (!text) return null as T;
      try {
        return JSON.parse(text) as T;
      } catch {
        return text as unknown as T;
      }
    }

    if (response.status === 401 && allowRefresh) {
      const refreshed = await refreshAccessToken();
      if (refreshed) {
        return tryRequest(refreshed, false);
      }
    }

    let message = `Request failed with status ${response.status}`;
    try {
      const data = await response.json();
      if (data && typeof data.error === 'string') {
        message = data.error;
      } else if (typeof data === 'string') {
        message = data;
      }
    } catch {
      const text = await response.text();
      if (text) message = text;
    }
    throw new Error(message);
  };

  return tryRequest(token);
}

export { API_BASE_URL };

type RefreshResponse = { access_token: string; refresh_token?: string };

async function refreshAccessToken(): Promise<string | null> {
  const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });

  if (!response.ok) {
    return null;
  }

  const data: RefreshResponse = await response.json();
  if (data.access_token) {
    return data.access_token;
  }

  return null;
}