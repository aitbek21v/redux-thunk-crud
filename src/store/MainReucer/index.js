const initialState = {
  product: [],
};

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, product: action.payload };
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
      case "DELETE_PRODUCT":
        return {...state,product:state.product.filter(el => el.id !== action.payload.id)}
    default:
      return state;
  }
};
