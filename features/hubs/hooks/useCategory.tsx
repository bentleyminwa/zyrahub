'use client';

import { useSearchParams } from 'next/navigation';

export function useCategory() {
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  const currentCategory = params.get('category');

  return {
    currentCategory,
  };
}
