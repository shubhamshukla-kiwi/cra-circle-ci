import { useLocalStorage } from 'react-use';
import axios from 'axios';
import React, { createContext, useCallback, useMemo } from 'react';
import type { FC } from 'react';

import {
  ZipCode,
  ZipCodeContext as ZipCodeContextType,
} from './ZipCodeContext.types';
import { useFetch } from '../../hooks/useFetch/useFetch';

import { validateZipCode } from './ZipCodeContext.utils';

export const Context = createContext<ZipCodeContextType>(
  {} as ZipCodeContextType,
);

export const Provider: FC = (props) => {
  const { children } = props;

  const [data, setData] = useLocalStorage<ZipCode | null>('new-quote');

  const { fetch: fetchZipCode } = useFetch({
    defer: true,
    request: useCallback(async (zipCode: string) => {
      if (zipCode.endsWith('_')) {
        return null;
      }

      const { data } = await axios.get<ZipCode>(
        `https://api.zippopotam.us/us/${zipCode}`,
      );

      setData(data);

      return data;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  });
  const isZipCodeValid = data ? data.places?.length > 0 : false;

  const isZipCodeSupported = data ? validateZipCode(data) : false;

  const cleanData = useCallback(() => {
    setData(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({
      cleanData,
      data,
      fetchZipCode,
      isZipCodeSupported,
      isZipCodeValid,
      setData,
    }),
    [
      cleanData,
      data,
      fetchZipCode,
      isZipCodeSupported,
      isZipCodeValid,
      setData,
    ],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const ZipCodeContext = Context;

export const ZipCodeProvider = Provider;

Provider.displayName = 'ZipCodeContext.Provider';
