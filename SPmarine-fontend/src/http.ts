import axios, { AxiosResponse } from "axios";

export const API_ENDPOINT: string = process.env.API_ENDPOINT || "http://localhost:5000";
export const API_VERSION: string = process.env.API_VERSION || "v1";

export const API_BASE = `${API_ENDPOINT}/${API_VERSION}`;

interface HTTP {
	get: <T>(entry: string, params?: Record<string, string | number | boolean>) => Promise<AxiosResponse<T>>;
	post: <T>(entry: string, data?: unknown) => Promise<AxiosResponse<T>>;
	put: <T>(entry: string, data?: unknown) => Promise<AxiosResponse<T>>;
	delete: <T>(entry: string) => Promise<AxiosResponse<T>>;
}

export const http: HTTP = {
	get: <T>(entry: string, params?: Record<string, string | number | boolean>) => axios.get<T>(`${API_BASE}/${entry}`, { params }),
	post: <T>(entry: string, data?: unknown) => axios.post<T>(`${API_BASE}/${entry}`, data),
	put: <T>(entry: string, data?: unknown) => axios.put<T>(`${API_BASE}/${entry}`, data),
	delete: <T>(entry: string) => axios.delete<T>(`${API_BASE}/${entry}`),
};
