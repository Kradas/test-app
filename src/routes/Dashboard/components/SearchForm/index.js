import React from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTextField from '../../../../components/FormTextField';

import classes from '../../style.module.scss';

const SearchForm = () => {
  return (
    <form className={classes.searchForm}>
      <Field
        name="search"
        component={FormTextField}
        label="Search"
        className={classes.textField}
        margin="normal"
      />
    </form>
  );
};

export default reduxForm({
  form: 'dashboardSearch',
})(SearchForm);
