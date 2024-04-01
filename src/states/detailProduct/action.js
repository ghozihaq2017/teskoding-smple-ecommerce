import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_PRODUCT: 'RECEIVE_DETAIL_PRODUCT',
  REMOVE_DETAIL_PRODUCT: 'REMOVE_DETAIL_PRODUCT',
};

function receiveDetailProductActionCreator(detailProduct) {
  return {
    type: ActionType.RECEIVE_DETAIL_PRODUCT,
    payload: {
      detailProduct,
    },
  };
}

function removeDetailProductActionCreator() {
  return {
    type: ActionType.REMOVE_DETAIL_PRODUCT,
  };
}

function asyncReceiveDetailProduct(productId) {
  return async (dispatch) => {
    dispatch(removeDetailProductActionCreator());
    try {
      // dispatch(removeDetailProductActionCreator());
      const detailProduct = await api.getDetailProduct(productId);
      dispatch(receiveDetailProductActionCreator(detailProduct));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveDetailProductActionCreator,
  removeDetailProductActionCreator,
  asyncReceiveDetailProduct,
};
