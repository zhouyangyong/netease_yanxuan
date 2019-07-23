import { connect } from 'react-redux';
import Search from '../components/search/Search';
import { add_searchHistory, clear_searchHistory } from '../redux/action';

const mapStateToProps = (state) => {
  return {
    searchHistory: state.searchHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSearchHistory: (searchHistory) => {
      dispatch(add_searchHistory(searchHistory));
    },
    clearSearchHistory: () => {
      dispatch(clear_searchHistory())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);