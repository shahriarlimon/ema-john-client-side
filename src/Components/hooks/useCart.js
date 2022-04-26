import { useEffect, useState } from "react";
import { getStoredProduct } from "../../utilities/fakedb";
const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedProductsIDs = getStoredProduct();
    const previousCart = [];
    const keys = Object.keys(storedProductsIDs);
    console.log(keys);
    fetch("http://localhost:4000/productByKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storedProductsIDs) {
          const addedProduct = products.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedProductsIDs[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
          }
        }
        setCart(previousCart);
      });
  }, []);
  return [cart, setCart];
};
export default useCart;
