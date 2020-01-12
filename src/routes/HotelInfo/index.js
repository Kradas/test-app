import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import { selectCurrentHotelInfo } from '../../store/reducers/selectors';

import { DatesForm, BookedSnackbar, HotelContent } from './components';

import classes from './style.module.scss';

const HotelInfo = () => {
  const { hotelId } = useParams();
  const currentHotelInfo = useSelector(state => selectCurrentHotelInfo(state, hotelId));
  return (
    <Card className={classes.card}>
      <CardMedia component="img" image={currentHotelInfo.image} height={600} />
      <HotelContent {...currentHotelInfo} />
      <DatesForm initialValues={{ hotel: currentHotelInfo.name }} />
      <BookedSnackbar />
    </Card>
  );
};

export default HotelInfo;
