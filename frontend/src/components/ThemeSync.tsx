import { useEffect } from 'react';
import useAppStore from '../store';

/** Applies `dark` on `<html>` from persisted store so Tailwind `dark:` works app-wide. */
function ThemeSync() {
  useEffect(() => {
    const root = document.documentElement;
    const apply = () => {
      const dark = useAppStore.getState().theme === 'dark';
      root.classList.toggle('dark', dark);
      root.style.colorScheme = dark ? 'dark' : 'light';
    };
    apply();
    return useAppStore.subscribe(apply);
  }, []);
  return null;
}

export default ThemeSync;
