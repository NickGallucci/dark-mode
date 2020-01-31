import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

  useEffect(
    () => {
      const className = 'dark-mode';
      const element = window.document.body;
      if (enabledState) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabledState] 
  );

  return [enabledState, setEnabledState];
};
