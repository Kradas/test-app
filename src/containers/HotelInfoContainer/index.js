import { connect } from 'react-redux';
import { handleBookHotelSubmit, handleHideSnackbar } from '../../store/actions';
import { selectCurrentHotelInfo, selectSnackbar } from '../../store/reducers/selectors';
import HotelInfo from '../../components/HotelInfo';

function mapStateToProps(state, props) {
  return {
    currentHotelInfo: selectCurrentHotelInfo(state, props.match.params.hotelId),
    showSnackbar: selectSnackbar(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => dispatch(handleBookHotelSubmit(values)),
    handleCloseSnackbar: () => dispatch(handleHideSnackbar()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HotelInfo);
