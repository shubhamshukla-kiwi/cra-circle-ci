import { useTitle as useTitleRU } from 'react-use';

import { getPageTitle } from './../utils/getPageTitle';

export const useTitle = (title: string) => {
  useTitleRU(getPageTitle(title));
}