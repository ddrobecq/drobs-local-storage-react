'use client';

import { useEffect, useState } from 'react';

/**
 * @function : getStorage
 * get the stored value from local storage
 * @param {string} storageKey  to read
 * @param {string} defaultValue if no value is stored
 * @returns {string} stored value or default value
 */
function getStorage(storageKey:string, defaultValue:string):string {
    try {
        if (typeof window !== 'undefined') {
            const storedValue = window.localStorage.getItem(storageKey);
            if (storedValue === null) {
                return defaultValue;
            } else {
                return JSON.parse(storedValue);
            }
        }
    } catch (error) {
        console.error('getStorage', 'get', error);
        return defaultValue;
    }
    return defaultValue;
}

/**
 * @hook useLocalStorage
 * React hook to set and get content in local storage
 * const [value, setValue] = useLocalStorage('key', 'default value');
 * @param {string} storageKey to get back or set the stored content
 * @param {string} defaultValue if no content is stored
 * @returns {[string, Function]} stored value and function to set the value
 */
export default function useLocalStorage (storageKey:string, defaultValue:string):[string, Function] {
  const [value, setValue] = useState (initValue());
  
  function initValue():string {
    return getStorage(storageKey, defaultValue);
  }

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(storageKey, JSON.stringify(value));
      }
    } catch (error) {
      console.error('useLocalStorage', 'set', error);
    }
  }, [value, storageKey]);
  
  return [value, setValue];
}