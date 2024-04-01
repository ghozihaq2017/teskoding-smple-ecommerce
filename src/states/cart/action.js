const ActionType = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART: 'UPDATE_CART',
};

function addToCartActionCreator(product) {
  return {
    type: ActionType.ADD_TO_CART,
    payload: {
      product,
    },
  };
}

function removeFromCartActionCreator(productId) {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload: {
      productId,
    },
  };
}

function updateCartActionCreator(cartItems) {
  return {
    type: ActionType.UPDATE_CART,
    payload: {
      cartItems,
    },
  };
}

export { ActionType, addToCartActionCreator, removeFromCartActionCreator, updateCartActionCreator };
