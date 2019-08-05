import React from 'react';
import Icon from '@material-ui/core/Icon';
import classes from './style.module.scss';

function StarIcons({ stars = 1 }) {
  let icons = [];
  for (let i = 0; i < stars; i++) {
    icons.push(
      <Icon className={classes.star} key={i}>
        star
      </Icon>,
    );
  }
  return <div className={classes.starsContainer}>{icons}</div>;
}

export default StarIcons;
