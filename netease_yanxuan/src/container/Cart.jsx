import { connect } from 'react-redux';
import Cart from '../components/cart/Cart';
import { add_cartList, remove_cartList } from '../redux/action';

const mapStateToProps = (state) => {
  return {
    cartList: state.cartList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeCartList: (id) => {
      dispatch(remove_cartList(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)