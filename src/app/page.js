"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import styles from "./page.module.css"
import Cart from "./components/cart";
import { add } from "./redux/slices/cartslice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  const [showmodal,setmodal]  = useState(false)
  const [citems, setitems] = useState([]);
  async function fetchapi() {
    const res = await fetch("https://dummyjson.com/products");
    const _items = await res.json();
    setitems(_items.products);
  }
  console.log("value of items is", citems);
  useEffect(() => {
    fetchapi();
  }, []);
  function handleclick(obj) {
    obj={...obj,count:1}
    console.log("checking for coutn", obj)
    dispatch(add(obj)); 
  }
  
  console.log("show modal value:",showmodal)
  return (
    <div>
      <Navbar setmodal={setmodal}/>
      {showmodal&&<Cart setmodal={setmodal} />}
      <div className="maincontainer">
        {citems.map((obj) => (
          <div className="container">
            <Image src={obj.thumbnail} height={250} width={250} />
            <div className="title">{obj.title}</div>
            <div className="rating">Rating:{obj.rating}</div>
            <div className="price">₹{obj.price}</div>
            <div className="add" onClick={handleclick}>
              Add To Cart
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
