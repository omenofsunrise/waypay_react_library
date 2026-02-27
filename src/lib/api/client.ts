// Centralized API base so all requests target the same backend
import { API_BASE_URL } from './config';

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
  withCredentials?: boolean;
};

export async function apiRequest<T = unknown>(endpoint: string, options: RequestOptions = {}) {
  const { 
    method = 'GET', 
    body, 
    headers = {}, 
    withCredentials = true
  } = options;

  const performRequest = async () => {
    const finalHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers,
    };

    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      method,
      headers: finalHeaders,
      body: body ? JSON.stringify(body) : undefined,
      credentials: withCredentials ? 'include' : 'same-origin',
    });

    return response;
  };

  const tryRequest = async (): Promise<T> => {
    const response = await performRequest();

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

  return tryRequest();
}

export { API_BASE_URL };
