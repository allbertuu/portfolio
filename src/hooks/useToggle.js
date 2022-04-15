import { useCallback, useState } from 'react';

export function useToggle(initialState) {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = useCallback(() => setIsOpen(isOpen => !isOpen), []);
  return [isOpen, toggle]
}