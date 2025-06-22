"use client";

import * as React from "react";
import { createContext, useState, type ReactNode } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import type { Tugboat } from "@/types/tugboat";

export interface TugboatContextType {
  tugboat?: Tugboat[];
  isError?: unknown;
  isLoading: boolean;
  selectedTugboat?: Tugboat;
  getById?: (id: string) => Tugboat | null;
}

export const TugboatContext = createContext<TugboatContextType>({ isLoading: true });

export function useTugboat() {
  return React.useContext(TugboatContext);
}

export function TugboatProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [selectedTugboat, setSelectedTugboat] = useState<Tugboat>();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<Tugboat[]>({
    queryKey: ["tugboats"],
    queryFn: async () => {
      return (await axios.get(`${process.env.API_ENDPOINT}/${process.env.API_VERSION}/tugboats`)).data as Tugboat[];
    },
  });

  const getById = (id: string): Tugboat | null => {
    const cached = queryClient.getQueryData<Tugboat[]>(["tugboats"])?.find((t) => t.id === id);
    if (cached) {
      setSelectedTugboat(cached);
      return cached;
    }
    return null;
  }

  if (!data) return <></>

  return (
    <TugboatContext.Provider
      value={{
        tugboat: data,
        isLoading: isLoading,
        getById: getById,
        selectedTugboat: selectedTugboat
      }}
    >
      {children}
    </TugboatContext.Provider>
  );
}
