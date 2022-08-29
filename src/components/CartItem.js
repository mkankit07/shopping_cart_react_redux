import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
// import { cartActions } from "./../store/cartSlice";
const CartItem = ({ name, quantity, total, price, id }) => {
  console.log(name, quantity, total, price, id );
  const dispatch = useDispatch()
  const incrementQuantity=()=>{
    dispatch(cartActions.addToCart({name,id,price}))
  };
  const decrementQuantity=()=>{
    dispatch(cartActions.removeFromCart(id))
  }
  // const dispatch = useDispatch();
  // const removeHandler = () => {
  //   dispatch(cartActions.removeFromCart(id));
  // };
  // const addHandler = () => {
  //   dispatch(
  //     cartActions.addToCart({
  //       id,
  //       name,
  //       price,
  //     })
  //   );
  // };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementQuantity}>
        -
      </button>
      <button className="cart-actions" onClick={incrementQuantity}>
        +
      </button>
    </div>
  );
};

export default CartItem;
