import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash/isEqual';
import sampleSize from 'lodash/sampleSize';
import { getFormValues } from 'redux-form';

export const selectHotels = state => Object.values(state.main.hotels);
export const selectFormSearch = state => getFormValues('dashboardSearch')(state);
export const selectCurrentHotelInfo = (state, hotelId) => state.main.hotels[hotelId];
export const selectSnackbar = state => state.main.isSnackbarShown;

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export const selectRandomHotels = createDeepEqualSelector(selectHotels, hotels => {
  return sampleSize(hotels, 5);
});

export const selectSearchResults = createDeepEqualSelector(
  selectHotels,
  selectFormSearch,
  (hotels, { search } = { search: '' }) => {
    return search
      ? hotels.filter(({ city, name }) => {
          return (
            city.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          );
        })
      : undefined;
  },
);
