import api from '../../utils/api';

const ActionType = {
  RECEIVE_PRODUCTS: 'RECEIVE_PRODUCTS',
};

function receiveProductsActionCreator(products) {
  return {
    type: ActionType.RECEIVE_PRODUCTS,
    payload: {
      products,
    },
  };
}

function asyncReceiveProducts() {
  return async (dispatch) => {
    try {
      const products = await api.getAllProducts();

      dispatch(receiveProductsActionCreator(products));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { ActionType, receiveProductsActionCreator, asyncReceiveProducts };
