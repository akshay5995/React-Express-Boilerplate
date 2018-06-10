const defaultState = {
  message: '',
  error: '',
};

export const welcomeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGE_FULFILLED':
      return Object.assign({}, state, {
        message: action.payload.message,
      });

    case 'ERROR_MESSAGE_FETCHING':
      return Object.assign({}, state, {
        error: action.payload,
      });

    default:
      return state;
  }
};
