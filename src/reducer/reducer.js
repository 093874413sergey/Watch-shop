const initialState = {
  basketItems:[]
};

export function basketReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        basketItems: [
          ...state.basketItems,
          action.payload
        ]
      }
    default:
      return state
  }
}
export default basketReducer
