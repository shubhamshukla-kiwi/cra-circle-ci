import { PAGE_TITLE_PREFIX } from './../constants';

export const getPageTitle = (string) =>
  string ? `${PAGE_TITLE_PREFIX} | ${string}` : PAGE_TITLE_PREFIX;
