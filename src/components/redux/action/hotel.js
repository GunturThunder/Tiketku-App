import axios from 'axios';

export const getAllHotell = () => {
  return {
    type: 'GET_HOTELS',
    payload: axios({
      method: 'GET',
      url: `http://http://192.168.1.7:8282/v1/hotel`,
    }),
  };
};
