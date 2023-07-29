export const initState = {
  modalBook: false,
  error: '',
  loading: false,
};

export const initStateReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        modalBook: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalBook: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: '',
      };
    case 'LOAD_DONE':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
