import { connect } from 'react-redux';
import Search from '../components/search/Search';
import { add_searchHistory, delete_searchHistory } from '../redux/action';

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    searchHistory: state.searchHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSearchHistory: (searchHistory) => {
      dispatch(add_searchHistory(searchHistory));
    },
    deleteSearchHistory: (searchHistory) => {
      dispatch(delete_searchHistory(searchHistory))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);