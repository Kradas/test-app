import { createAction } from 'redux-actions';
import * as types from './types';

export const handleBookHotelSubmit = createAction(types.BOOK_HOTEL_SUBMIT);
export const handleHideSnackbar = createAction(types.HIDE_SNACKBAR);
