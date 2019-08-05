import { connect } from 'react-redux';
import { selectRandomHotels, selectSearchResults } from '../../store/reducers/selectors';
import Dashboard from '../../components/Dashboard';

function mapStateToProps(state) {
  return {
    bestOffers: selectRandomHotels(state),
    searchResult: selectSearchResults(state),
  };
}

export default connect(mapStateToProps)(Dashboard);
