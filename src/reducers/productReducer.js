const initialState = {
  array: [],
};

const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        array: action.payload,
      };
    case "SORT":
      return {
        array: state.array.filter(
          (element) => element.category === action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
