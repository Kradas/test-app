import { handleActions } from 'redux-actions';
import * as types from '../actions/types';
import jsonData from './data';

const initialState = {
  hotels: jsonData,
  bookInfo: null,
  isSnackbarShown: false,
};

export default handleActions(
  {
    [types.BOOK_HOTEL_SUBMIT](state, { payload }) {
      return {
        ...state,
        bookInfo: payload,
        isSnackbarShown: true,
      };
    },
    [types.HIDE_SNACKBAR](state) {
      return {
        ...state,
        isSnackbarShown: false,
      };
    },
  },
  initialState,
);
