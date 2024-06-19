'use client';

import { useEffect, useState } from 'react';

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

// **********************************************
// function : useLocalStorage
//  storageKey : key to get back the stored content
//  defaultValue : default content to get if no content is stored
// description : React hook to set and get content in local storage
// **********************************************
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