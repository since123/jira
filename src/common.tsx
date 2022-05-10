import React, { useEffect, useState } from "react";
export const useDdebounce = (
  value: {
    name: string;
    personId: string;
  },
  delay: number
) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let timeConfig = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timeConfig);
    };
  }, [value, delay]);

  return debounceValue;
};

export const useMount = (callback = () => {}) => {
  useEffect(() => {
    callback();
  }, []);
};
export const isFalsy = (value: number) => (value === 0 ? false : !value);
export const cleanObject = (object: Object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete reault[key];
    }
  });
  return result;
};
