"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { remove, add, reducec } from "../redux/slices/cartslice";
import { useDispatch, useSelector } from "react-redux";
export default function Cart({ setmodal }) {
  const { items, totalcost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const modalcontainer = document.getElementById("cart");
    modalcontainer.overflowY = "scroll";
    return () => {
      document.body.style.overflowY = "scroll";
      modalcontainer.style.overflowY = "auto";
    };
  }, []);
  function handleonclick(obj) {
    dispatch(remove(obj));
  }
  function handleonadd(obj) {
    dispatch(add(obj));
  }
  function handleonreduce(obj) {
    dispatch(reducec(obj));
  }
  return (
    <>
      <div className="modelwrapper" onClick={() => setmodal(false)}></div>
      <div className="cartcontainer" id="cart">
        <div className="cartnav">
          <IoMdClose onClick={() => setmodal(false)} />
          <div>Cart</div>
        </div>
        {items.length === 0 ? (
          <div className="carti">Cart is empty</div>
        ) : (
          items.map((obj) => {
            return (
              <div className="carticontainer">
                <Image src={obj.thumbnail} height={150} width={150} />
                <div>
                  <div className="title">{obj.title}</div>
                  <div className="price">₹{obj.price}</div>
                </div>
                <div className="changecontainer">
                  <div
                    className="boxshadow"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleonreduce(obj)}
                  >
                    -
                  </div>
                  <div>{obj.count}</div>
                  <div
                    className="boxshadow"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleonadd(obj)}
                  >
                    +
                  </div>
                </div>
                <div
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={() => {
                    console.log("object value:", obj);
                    handleonclick(obj);
                  }}
                >
                  ×
                </div>
              </div>
            );
          })
        )}
        <div className="cartfooter">
          <div>Total:{totalcost}</div>
          <div>Checkout</div>
        </div>
      </div>
    </>
  );
}
