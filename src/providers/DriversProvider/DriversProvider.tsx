import React, { createContext, useReducer, useContext } from 'react';
import { setItemLocalStorage, validateZip } from '../../helpers';
import { types, driversReducer, initialState } from './state';

export const DriversStateContext = createContext({
  brands: []
});
export const DriversSetContext = createContext({
  handleNewDriver: () => {}
});

export const useStateDrivers = () => useContext(DriversStateContext);
export const useSetDrivers = () => useContext(DriversSetContext);

const DriversProvider = ({ children }) => {
  const [state, dispatch] = useReducer(driversReducer, initialState);

  const handleZipcode = async(zipcode) => {
    const response = await validateZip(zipcode);
    if (response) {
      dispatch({ type: types.SET_ZIP, payload: response });
      setItemLocalStorage('zip', response);
    }
    return response;
  }

  return (
    <DriversStateContext.Provider value={state}>
      <DriversSetContext.Provider
        value={{
          handleZipcode
        }}>
        {children}
      </DriversSetContext.Provider>
    </DriversStateContext.Provider>
  );
};

export default DriversProvider;
