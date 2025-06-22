"use client";

import * as React from "react";
import { createContext, ReactNode, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Order } from "@/types/order";

export interface OrderContextType {
	data?: Order[];
	isError?: unknown;
	isLoading: boolean;
	getById?: (id: string) => Order | null;
}

export const OrderContext = createContext<OrderContextType>({ isLoading: true });

export function useOrder() {
	return useContext(OrderContext);
}

export function OrderProvider({ children }: { children: ReactNode }): React.JSX.Element {
	const { data, isLoading } = useQuery<Order[]>({
		queryKey: ["orders"],
		queryFn: async () => {
			return (await axios.get<Order[]>(`${process.env.API_ENDPOINT}/${process.env.API_VERSION}/orders`)).data;
		},
	});

	const getById = (id: string): Order | null => {
		return data?.find(order => order.id === id) || null;
	};

	if (!data) return <></>;

	return <OrderContext.Provider value={{ data: data, isLoading: isLoading, getById }}>{children}</OrderContext.Provider>;
}
