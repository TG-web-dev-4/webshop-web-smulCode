const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART2":
      // let addedItem = state.find(item=> item.name === action.name)
      // //check if the action id exists in the addedItems

      return [...state, action.payload];

    default:
      return state;
  }
};

export default productsReducer;
