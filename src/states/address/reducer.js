import { ActionType } from './action';

function addressReducer(addresses = [], action) {
  switch (action.type) {
    case ActionType.RECEIVE_ADDRESS:
      return action.payload;
    case ActionType.ADD_ADDRESS:
      return [...addresses, action.payload];
    default:
      return addresses;
  }
}

export default addressReducer;
