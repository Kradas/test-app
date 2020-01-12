import React from 'react';
import Icon from '@material-ui/core/Icon';
import classes from './style.module.scss';

function StarIcons({ stars = 1 }) {
  const arr = [...Array(stars)].reduce((prevVal, currentVal, index) => {
    return [
      ...prevVal,
      <Icon key={index} className={classes.star}>
        star
      </Icon>,
    ];
  }, []);
  return <div className={classes.starsContainer}>{arr}</div>;
}

export default StarIcons;
