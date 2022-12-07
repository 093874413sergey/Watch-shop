const initialState = {
  basketItems:[]
};

export function basketReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const itemIds = state.basketItems.map(({itemData}) => itemData.id)
      const isItemExist = itemIds.includes(action.payload.id)

      if(isItemExist) {
        return {
          ...state,
          basketItems: [
            ...state.basketItems.map(item => {
              if(item.itemData.id === action.payload.id) {
                return {
                  quantity: item.quantity + 1,
                  itemData: item.itemData,
                }
              }

              return item
            }),
          ]
        }
      }

      return {
        ...state,
        basketItems: [
          ...state.basketItems,
          {
            quantity: 1,
            itemData: action.payload
          },
        ]
      }
    case 'DELETE_ITEM':
      let newItems = []

      for(let index=0; index < state.basketItems.length; index++) {

        if(state.basketItems[index].itemData.id !== action.payload.id) {
          newItems.push(state.basketItems[index])
        }

        if(state.basketItems[index].quantity >= 2) {
          newItems.push({
            quantity: state.basketItems[index].quantity - 1,
            itemData: action.payload,
          })
        }
      }

      return {
        ...state,
        basketItems: newItems,
      }
    default:
      return state
  }
}
export default basketReducer
