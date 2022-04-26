import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredProduct } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProduct";
import Product from "../Product/Product";
import { AiOutlineArrowRight } from "react-icons/ai";

const Shop = () => {
    const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart(products);
  const [pagesCount, setPagesCount] = useState(0);
  const [page, setPage] = useState(0);
  const [productsNumber, setProductsNumber] = useState(10);
  

  useEffect(() => {
    fetch(`http://localhost:4000/products?page=${page}&productsNumber=${productsNumber}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page,productsNumber]);

  useEffect(() => {
    fetch("http://localhost:4000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPagesCount(pages);
      });
  }, []);
  const addToCartHandler = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product._id !== selectedProduct);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  return (
    <div>
      <div className="grid grid-cols-5 gap-x-4">
        <div className="col-span-4 grid grid-cols-3 gap-4 px-10">
          {products.map((product) => (
            <Product
              addToCartHandler={addToCartHandler}
              product={product}
              key={product._id}
            ></Product>
          ))}
        </div>
        <div className="border bg-[#FFE0B3] col-span-1 px-5 py-5 relative">
          <Cart cart={cart}>
            <Link to="/order">
              <button className=" mt-3 px-3 py-2 bg-[#FF9900] w-full text-white rounded flex items-center justify-center">
                Review Order <AiOutlineArrowRight className="ml-2" />
              </button>
            </Link>
          </Cart>
        </div>
      </div>
      <div className="flex justify-center items-center my-12 space-x-5">
        {[...Array(pagesCount).keys()].map((number) => (
          <button
            className={
              page === number
                ? " border border-orange-500 "
                : " bg-orange-500 text-white"
            }
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <select
          onChange={(e) => setProductsNumber(e.target.value)}
          className="border-2 bg-orange-400"
        >
          <option value="5" selected>
            5
          </option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
