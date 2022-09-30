import {
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
} from '../types';

// eslint-disable-next-line
export default(state, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      const isProduct = state.products.find(product => product.id === action.payload.id);

      if (!isProduct) {
        return {
          ...state,
          products: [
            ...state.products,
            action.payload,
          ],
        }
      } else {
        const newList = state.products.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            }
          }

          return product;
        });

        return {
          ...state,
          products: [...newList],
        }
      }
      
    case REMOVE_PRODUCT_FROM_BASKET:
      const product = state.products.find(product => product.id === action.payload);

      if (product.quantity === 1) {
        return {
          ...state,
          products: [
            ...state.products.filter(product => product.id !== action.payload)
          ]
        }
      } else {
        const newList = state.products.map(product => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity - 1,
            }
          }

          return product;
        });

        return {
          ...state,
          products: [...newList],
        }
      }

    default:
      return state;
  }
};