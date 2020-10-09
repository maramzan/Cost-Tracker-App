const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];

    case "DELETE":
      let newState = state.filter((item) => item.id !== action.payload);
      return [...newState];
    default:
      return state;
  }
};
export default TransactionReducer;
