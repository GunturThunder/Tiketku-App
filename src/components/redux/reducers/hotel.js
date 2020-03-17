const initialState = {
  hotels: [],
};

const hotel = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HOTELS_PENDING':
      return {
        ...state,
      };
    case 'GET_HOTELS_REJECTED':
      return {
        ...state,
      };
    case 'GET_HOTELS_FULFILLED':
      return {
        ...state,
        hotels: action.payload.data.result,
      };
    default:
      return state;
  }
};

export default hotel;
