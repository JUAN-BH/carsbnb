export const bookingState = {
  carSelected: '',
  pickUp: '',
  dropOff: '',
  pickUpDate: '',
  dropOffDate: '',
};

export const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_CAR':
      return {
        ...state,
        carSelected: action.payload,
      };
    case 'BOOK_CAR':
      return {
        ...state,
        pickUp: action.payload.pickUp,
        dropOff: action.payload.dropOff,
        pickUpDate: action.payload.pickUpDate,
        dropOffDate: action.payload.pickUpDate,
      };
    default:
      return state;
  }
};
