"use client";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { toggle } from "../redux/slices/cartslice";
export default function Navbar() {
  const { items, togglecart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="navcontainer">
      <div>Shopping Cart</div>
      <div
        id="cartbutton"
        onClick={() => {
          dispatch(toggle(true));
        }}
      >
        <BsCart4 style={{ height: "25px", width: "25px" }} />
        <span>{items.length}</span>
      </div>
    </div>
  );
}
