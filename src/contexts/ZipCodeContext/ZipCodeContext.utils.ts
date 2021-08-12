import type { ZipCode } from './ZipCodeContext.types';

const ALLOWED_ZIP_CODES = [
  '98601',
  '98604',
  '98606',
  '98607',
  '98616',
  '98629',
  '98642',
  '98660',
  '98661',
  '98662',
  '98663',
  '98664',
  '98665',
  '98671',
  '98674',
  '98675',
  '98682',
  '98683',
  '98684',
  '98685',
  '98686',
];

export const validateZipCode = (data: ZipCode): boolean => {
  const state = data?.places[0]['state abbreviation'] || '';
  const zipCode = data?.['post code'] || '';

  if (zipCode.length !== 5) return false;

  if (ALLOWED_ZIP_CODES.includes(zipCode)) return true;

  const zipDigits = zipCode.slice(0, 2);

  return /97/.test(zipDigits) && state === 'OR';
};
