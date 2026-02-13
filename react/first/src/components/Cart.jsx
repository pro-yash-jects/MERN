import React, { useState } from "react";

function Cart() {
  const [item, setItem] = useState("");
  const [cartList, setCartList] = useState([]);
  function addItems() {
    if (!item) {
      alert("Please enter an item");
      return;
    }
    setCartList([...cartList, item]);
    setItem("");
  }
  function removeItem(index) {
    if (cartList.length === 0) {
      alert("No items to remove");
      return;
    }
    setCartList(cartList.filter((item, i) => i !== index));
  }
  return (
    <>
      <input type="text" onChange={(e) => setItem(e.target.value)} />
      <br />
      <br />
      <button onClick={addItems}>Add Item</button>

      <h2>Cart Items:</h2>
      {cartList.length === 0 && <p>No items in the cart</p>}
      <ol>
        {cartList.map((item, index) => {
          return (
            <li key={index} id={index}>{item} <span></span>
              <button onClick={() => removeItem(index)}>Remove Item</button>
            </li>
          );
        })}
      </ol>
    </>
  );
}
export default Cart;
