import { GET_HOUSES_SUCCESS } from '../actions/getHouses';

export default (state = {
  houses: [],
}, action) => {
  switch (action.type) {
    case GET_HOUSES_SUCCESS:
      return {
        ...state,
        houses: action.houses,
      };
    default:
      return state;
  }
};
