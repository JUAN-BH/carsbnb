import { createContext, useContext, useMemo, useReducer } from 'react';
import { bookingReducer, bookingState } from '../reducers/bookingCtxReducer';

const BookingContext = createContext();

// eslint-disable-next-line react/function-component-definition
export const BookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, bookingState);
  const data = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );
  return (
    <BookingContext.Provider value={data}>{children}</BookingContext.Provider>
  );
};

export const useBookingContext = () => {
  return useContext(BookingContext);
};
