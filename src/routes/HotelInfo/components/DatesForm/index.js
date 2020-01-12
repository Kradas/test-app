import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

import { handleBookHotelSubmit } from '../../../../store/actions';
import FormTextField from '../../../../components/FormTextField';

import classes from '../../style.module.scss';

const DatesForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const onSubmit = handleSubmit(values => dispatch(handleBookHotelSubmit(values)));

  return (
    <CardActions>
      <form className={classes.form} onSubmit={onSubmit}>
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
  );
};

export default reduxForm({
  form: 'datesForm',
})(DatesForm);
