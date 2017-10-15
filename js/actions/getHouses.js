import getHousesAPI from '../helpers/getHousesAPI';

export const GET_HOUSES = 'GET_HOUSES';
export const GET_HOUSES_SUCCESS = 'GET_HOUSES_SUCCESS';
export const GET_HOUSES_FAILED = 'GET_HOUSES_FAILED';

export const getHouses = () => ({
  type: GET_HOUSES,
});

export const getHousesSuccess = houses => ({
  type: GET_HOUSES_SUCCESS,
  houses,
});

export const getHousesFailed = error => ({
  type: GET_HOUSES_FAILED,
  error,
});

export default () => (dispatch) => {
  dispatch(getHouses());

  getHousesAPI()
    .then(({ houses }) => dispatch(getHousesSuccess(houses)))
    .catch(error => dispatch(getHousesFailed(error)));
};
