const initialState = {
  oneProduct: {},
};
export const UpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};
