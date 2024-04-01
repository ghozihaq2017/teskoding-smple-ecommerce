import { ActionType } from './action';

function cartReducer(cart = [], action = {}) {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return [...cart, action.payload.product];
    case ActionType.REMOVE_FROM_CART:
      return cart.filter((item) => item.id !== action.payload.productId);
    case ActionType.UPDATE_CART:
      return action.payload.cartItems;
    default:
      return cart;
  }
}

export default cartReducer;
