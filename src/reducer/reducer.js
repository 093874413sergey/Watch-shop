const initialState = {
  basketItems:[]
};

export const yourAddFunction = (basketItems, itemToAdd) => {
  return [] // вместо "return []" напиши свою функцию которая будет добавлять товар
}

export const yourDeleteFunction = (basketItems, idToDelete) => {
  return [] // вместо "return []" напиши свою функцию которая будет уменьшьать или удалять товары
}

export function basketReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        basketItems: yourAddFunction(state.basketItems, action.payload)
      }
    case 'DELETE_ITEM':
      return {
        ...state,
        basketItems: yourDeleteFunction(state.basketItems, action.payload.id),
      }
    default:
      return state
  }
}
export default basketReducer
