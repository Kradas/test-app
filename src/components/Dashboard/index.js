import React from 'react';
import { reduxForm, Field } from 'redux-form';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormTextField from '../FormTextField';
import { Link } from 'react-router-dom';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import StarIcons from '../StarIcons';

import classes from './style.module.scss';

class Dashboard extends React.Component {
  render() {
    const { bestOffers, searchResult } = this.props;
    return (
      <form className={classes.root}>
        <GridList cellHeight={150} className={classes.gridList} cols={2}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" className={classes.listHeader}>
              <Field
                name="search"
                component={FormTextField}
                label="Search"
                className={classes.textField}
                margin="normal"
              />
            </ListSubheader>
          </GridListTile>
          <GridListTile key="listTitle" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" className={classes.title}>
              {!searchResult ? 'Best offers:' : 'Search result:'}
            </ListSubheader>
          </GridListTile>
          {(searchResult ? searchResult : bestOffers).map(hotel => (
            <GridListTile key={hotel.id} cols={1} rows={4}>
              <img src={hotel.image} alt={hotel.name} />
              <GridListTileBar
                title={
                  <div className={classes.hotelBar}>
                    <span>{hotel.name}</span>
                    <StarIcons stars={hotel.stars} />
                  </div>
                }
                actionIcon={
                  <Link to={`/hotel/${hotel.id}`}>
                    <IconButton aria-label={`info about ${hotel.name}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  </Link>
                }
                subtitle={<span>{hotel.city}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </form>
    );
  }
}

export default reduxForm({
  form: 'dashboardSearch',
})(Dashboard);
