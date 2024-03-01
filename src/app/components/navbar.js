"use client";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { toggle } from "../redux/slices/cartslice";
export default function Navbar({ setmodal }) {
  const { totalitems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="navcontainer">
      <div>Shopping Cart</div>
      <div
        id="cartbutton"
        onClick={() => {
          console.log("clicked man");
          setmodal(true);
        }}
      >
        <BsCart4 style={{ height: "25px", width: "25px" }} />
        <span>{totalitems}</span>
      </div>
    </div>
  );
}
