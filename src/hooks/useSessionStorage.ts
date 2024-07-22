"use client";

import { useCallback } from "react";

export default function useSessionStorage() {
  const get = useCallback((key: string) => {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }, []);

  const set = useCallback((key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, []);

  const remove = useCallback((key: string) => {
    sessionStorage.removeItem(key);
  }, []);

  return { get, set, remove };
}
