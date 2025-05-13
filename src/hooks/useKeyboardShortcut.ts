import { useEffect, useCallback } from 'react';

type KeyboardShortcut = {
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  callback: () => void;
};

export const useKeyboardShortcut = (shortcuts: KeyboardShortcut[]) => {
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    shortcuts.forEach(({ key, ctrlKey, altKey, callback }) => {
      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        (!ctrlKey || event.ctrlKey) &&
        (!altKey || event.altKey)
      ) {
        event.preventDefault();
        callback();
      }
    });
  }, [shortcuts]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);
};