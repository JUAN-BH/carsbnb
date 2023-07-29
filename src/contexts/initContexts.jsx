import { createContext, useContext, useMemo, useReducer } from 'react';
import { initState, initStateReducer } from '../reducers/initContextReducer';

const InitContext = createContext();

export function InitContextProvider({ children }) {
  const [state, dispatch] = useReducer(initStateReducer, initState);
  const data = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );
  return <InitContext.Provider value={data}>{children}</InitContext.Provider>;
}

export const useInitState = () => {
  return useContext(InitContext);
};
