import React from 'react';
import { useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import { selectRandomHotels, selectSearchResults } from '../../store/reducers/selectors';
import { SearchForm, HotelsList } from './components';

import classes from './style.module.scss';

const Dashboard = () => {
  const { bestOffers, searchResult } = useSelector(state => ({
    bestOffers: selectRandomHotels(state),
    searchResult: selectSearchResults(state),
  }));

  return (
    <>
      <SearchForm />
      <div className={classes.listContainer}>
        <Typography className={classes.title} variant="h3" component="h2">
          {!searchResult ? 'Best offers:' : 'Search result:'}
        </Typography>
        <HotelsList data={searchResult ? searchResult : bestOffers} />
      </div>
    </>
  );
};

export default Dashboard;
