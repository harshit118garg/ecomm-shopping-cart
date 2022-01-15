const reducer = (state, action) => {
  if (action.type === "RM_ITEM") {
    return {
      ...state,
      items: state.items.filter((cur) => {
        return cur.id !== action.payload;
      }),
    };
  }
  return state;
};

export default reducer;
