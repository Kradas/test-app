import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import { handleHideSnackbar } from '../../../../store/actions';
import { selectSnackbar } from '../../../../store/reducers/selectors';

import classes from '../../style.module.scss';

const BookedSnackbar = () => {
  const dispatch = useDispatch();
  const handleCloseSnackbar = () => dispatch(handleHideSnackbar());
  const showSnackbar = useSelector(state => selectSnackbar(state));
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={showSnackbar}
      autoHideDuration={2000}
      onClose={handleCloseSnackbar}
    >
      <SnackbarContent
        className={classes.snackbar}
        aria-describedby="client-snackbar"
        message="Successfully booked"
      />
    </Snackbar>
  );
};

export default BookedSnackbar;
