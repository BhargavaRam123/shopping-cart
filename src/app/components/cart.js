"use client";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/slices/cartslice";
export default function Cart() {
  const { togglecart } = useSelector((state) => state.cart);
  // const [toggle, settoggle] = useState(true);
  const dispatch = useDispatch();
  useEffect(
    (e) => {
      function outsideclick(e) {
        const cartContainer = document.getElementById("cart");
        console.log(cartContainer);
        if (!cartContainer) {
          console.log("clicked outside");
          dispatch(toggle(false));
        }
      }
      window.addEventListener("click", outsideclick);
      return () => {
        window.removeEventListener("click", outsideclick);
      };
    },
    [togglecart]
  );
  return (
    togglecart && (
      <div className="modelwrapper">
        <div className="cartcontainer" id="cart">
          <div className="cartnav">
            <IoMdClose />
            <div>Cart</div>
          </div>
          <div className="carti">Cart is empty</div>
          <div className="cartfooter">
            <div>Total:</div>
            <div>Checkout</div>
          </div>
        </div>
      </div>
    )
  );
}
