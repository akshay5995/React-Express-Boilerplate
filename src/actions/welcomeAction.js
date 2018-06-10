import axios from 'axios';

export const fetchMessgaeFulfilled = (payload) => {
  return {
    type: 'FETCH_MESSAGE_FULFILLED',
    payload,
  };
};

export const errorMessageFetching = (payload) => {
  return {
    type: 'ERROR_MESSAGE_FETCHING',
    payload,
  };
};

export const fetchMessgae = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: '/api',
    })
      .then((res) => {
        dispatch(fetchMessgaeFulfilled(res.data));
      })
      .catch(() => {
        dispatch(errorMessageFetching('Error Fetching'));
      });
  };
};
