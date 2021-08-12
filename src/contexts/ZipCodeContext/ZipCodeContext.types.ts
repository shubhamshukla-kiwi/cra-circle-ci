import type { Dispatch, SetStateAction } from 'react';

export interface ZipCodePlace {
  'place name': string;
  'state abbreviation': string;
  latitude: string;
  longitude: string;
  state: string;
}

export interface ZipCode {
  'country abbreviation': string;
  'post code': string;
  country: string;
  places: ZipCodePlace[];
}

export type ZipCodeContext = {
  cleanData: () => void;
  data: ZipCode | null | undefined;
  fetchZipCode: (zipCode: number | string) => void;
  isZipCodeSupported: boolean;
  isZipCodeValid: boolean;
  setData: Dispatch<SetStateAction<ZipCode | null | undefined>>;
};
