import React, { useReducer } from 'react';

import basketContext from './context';
import basketReducer from './reducer';

import {
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
} from '../types';

const BasketState = props => {
  const initialState = {
    products: [],
  };

  const [state, dispatch] = useReducer(basketReducer, initialState);

  const addProductToBasket = product => {
    dispatch({
      type: ADD_PRODUCT_TO_BASKET,
      payload: product,
    });
  }

  const removeProduct = id => {
    dispatch({
      type: REMOVE_PRODUCT_FROM_BASKET,
      payload: id,
    });
  }

  return (
    <basketContext.Provider
      value={{
        products: state.products,
        addProductToBasket,
        removeProduct,
      }}
    >
      {props.children}
    </basketContext.Provider>
  )
};

export default BasketState;
