import { connect } from 'react-redux';
import Detail from '../components/detail/Detail';
import { add_cartList, remove_cartList } from '../redux/action';

const mapStateToProps = (state) => {
  return {
    cartList: state.cartList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCartList: (cartList) => {
      dispatch(add_cartList(cartList));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);