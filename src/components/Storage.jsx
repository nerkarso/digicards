import mockData from '@/db';
import { useEffect } from 'react';

export default function Storage({ children }) {
  useEffect(() => {
    const db = window.localStorage.getItem('ra-data-local-storage');
    if (!db) {
      window.localStorage.setItem('ra-data-local-storage', JSON.stringify(mockData));
    }
  }, []);

  return children;
}
