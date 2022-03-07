export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    id,
  };
};
//to remove the item completely
export const Remove = (id) => {
  return {
    type: "REMOVE_ITEM",
    id,
  };
};

//to add the quantity
export const AddQuantity = (id) => {
  return {
    type: "ADD_QUANTITY",
    id,
  };
};
//to subtract from the quantity
export const SubtractQuantity = (id) => {
  return {
    type: "SUB_QUANTITY",
    id,
  };
};

export const increment = (nr) => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};
export const decrement = (nr) => {
  return {
    type: "DECREMENT",
    payload: nr,
  };
};
