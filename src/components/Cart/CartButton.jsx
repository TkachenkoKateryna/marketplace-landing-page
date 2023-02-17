import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/slices/ui.slice";
import Button from "../shared/Button";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toogleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Button onClick={toogleCartHandler} text={`My Cart: ${cartQuantity}`} />
  );
};

export default CartButton;
