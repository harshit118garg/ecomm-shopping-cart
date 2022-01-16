const reducer = (state, action) => {
  if (action.type === "RM_ITEM") {
    return {
      ...state,
      items: state.items.filter((cur) => {
        return cur.id !== action.payload;
      }),
    };
  }

  if (action.type === "RM_ALL") {
    return {
      ...state,
      items: [],
    };
  }

  if (action.type === "INC_QUANT") {
    return {
      ...state,
      items: state.items.map((curr) =>
        curr.id === action.payload
          ? {
              ...curr,
              quantity: curr.quantity + 1,
            }
          : curr
      ),
    };
  }

  if (action.type === "DEC_QUANT") {
    return {
      ...state,
      items: state.items
        .map((curr) =>
          curr.id === action.payload
            ? {
                ...curr,
                quantity: curr.quantity - 1,
              }
            : curr
        )
        .filter((curr) => {
          return curr.quantity !== 0;
        }),
    };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItems, totalAmount } = state.items.reduce(
      (acc, curr) => {
        let { quantity, price } = curr;
        let newAmount = price * quantity;
        acc.totalAmount += newAmount;
        acc.totalItems += quantity;
        return acc;
      },
      {
        totalItems: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItems, totalAmount };
  }

  return state;
};

export default reducer;
