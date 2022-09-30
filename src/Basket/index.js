import React, { useContext, useEffect, useState } from "react";

import basketContext from "../context/context";

const Basket = () => {
  const basket_Context = useContext(basketContext);
  const { products, addProductToBasket, removeProduct } = basket_Context;
  const CLASS_PREFIX = 'basket';
  const [totalPrice, setTotalPrice] = useState(0);

  const getSampleProduct = () => {
    const product = {
      id: Math.floor(Math.random() * 10),
      name: "product 1",
      quantity: 1,
      price: Math.floor(Math.random() * 100),
    }

    addProductToBasket(product);
  };

  useEffect(() => {
    let newTotalPrice = 0;

    products.forEach(product => {
      newTotalPrice = newTotalPrice + (product.quantity * product.price);
    });

    setTotalPrice(newTotalPrice);
  }, [products])

  return(
    <div className={CLASS_PREFIX}>
      <div className={`${CLASS_PREFIX}--actions`}>
        <button onClick={getSampleProduct}>Add product to basket</button>
      </div>
      <p>Total price: ${totalPrice}</p>
      <ul className={`${CLASS_PREFIX}--products`}>
        {products.map(product => (
          <li 
            key={product.id}
            id={`product-${product.id}`}
            className={`${CLASS_PREFIX}--product`}
          >
            <span>Name: {product.name}</span>
            <span>Quantity: {product.quantity}</span>
            <span>Price: {product.price}</span>
            <button
              className={`${CLASS_PREFIX}--remove`}
              id={`remove-${product.id}`}
              onClick={() => removeProduct(product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Basket;
