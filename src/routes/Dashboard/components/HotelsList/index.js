import React from 'react';
import { Link } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import StarIcons from '../../../../components/StarIcons';

import classes from '../../style.module.scss';

const HotelsList = ({ data }) => {
  return (
    <GridList cellHeight={150} className={classes.gridList} spacing={10} cols={3}>
      {data.map(({ id, image, name, stars, city }) => (
        <GridListTile key={id} rows={3}>
          <Link to={`/hotel/${id}`}>
            <img src={image} alt={name} className={classes.img} />
            <GridListTileBar
              title={
                <div className={classes.hotelBar}>
                  <span>{name}</span>
                  <StarIcons stars={stars} />
                </div>
              }
              subtitle={<span>{city}</span>}
            />
          </Link>
        </GridListTile>
      ))}
    </GridList>
  );
};

export default HotelsList;
