import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcons from '../StarIcons';
import FormTextField from '../FormTextField';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import classes from './style.module.scss';

class HotelInfo extends Component {
  componentDidMount() {
    this.props.initialize({
      hotel: this.props.currentHotelInfo.name,
    });
  }

  render() {
    const { currentHotelInfo } = this.props;
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardMedia component="img" alt="Contemplative Reptile" image={currentHotelInfo.image} height={600} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.hotelName}>
              {currentHotelInfo.name}
              <StarIcons stars={currentHotelInfo.stars} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {currentHotelInfo.description}
            </Typography>
          </CardContent>
          <CardActions>
            <form className={classes.form} onSubmit={this.props.handleSubmit}>
              <div className={classes.dateFields}>
                <Field
                  name="dateFrom"
                  component={FormTextField}
                  type="date"
                  label="from"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Field
                  name="dateTo"
                  component={FormTextField}
                  type="date"
                  label="to"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <Button type="submit" color="primary">
                Book
              </Button>
            </form>
          </CardActions>
        </Card>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.props.showSnackbar}
          autoHideDuration={2000}
          onClose={this.props.handleCloseSnackbar}
        >
          <SnackbarContent
            className={classes.snackbar}
            aria-describedby="client-snackbar"
            message="Successfully booked"
          />
        </Snackbar>
      </div>
    );
  }
}

export default reduxForm({
  form: 'bookForm',
})(HotelInfo);
