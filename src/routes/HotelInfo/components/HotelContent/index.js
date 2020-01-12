import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import StarIcons from '../../../../components/StarIcons';

import classes from '../../style.module.scss';

const HotelContent = ({ name, description, stars }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2" className={classes.hotelName}>
        {name}
        <StarIcons stars={stars} />
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {description}
      </Typography>
    </CardContent>
  );
};

export default HotelContent;
