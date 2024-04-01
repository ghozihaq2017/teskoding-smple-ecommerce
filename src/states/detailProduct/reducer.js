import { ActionType } from './action';

function detailProductReducer(detailProduct = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_PRODUCT:
      return action.payload.detailProduct || null;
    case ActionType.REMOVE_DETAIL_PRODUCT:
      return null;
    default:
      return detailProduct;
  }
}

export default detailProductReducer;
