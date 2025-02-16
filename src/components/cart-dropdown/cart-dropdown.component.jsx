import { CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))) :
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
