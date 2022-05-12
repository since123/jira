import { useEffect, useState } from "react";
export const useDebounce = <V,>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeConfig = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeConfig);
  }, [value, delay]);

  return debounceValue;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};
export const isFalsy = (value: any): boolean => (value === 0 ? false : !value);
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key: string) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
