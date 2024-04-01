const ActionType = {
  RECEIVE_ADDRESS: 'RECEIVE_ADDRESS',
  ADD_ADDRESS: 'ADD_ADDRESS',
};

function receiveAddressActionCreator(addresses) {
  return {
    type: ActionType.RECEIVE_ADDRESS,
    payload: addresses,
  };
}

function addAddressActionCreator(newAddress) {
  return {
    type: ActionType.ADD_ADDRESS,
    payload: newAddress,
  };
}

export { ActionType, receiveAddressActionCreator, addAddressActionCreator };
