
import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Order Sucessful!\n\nYour order was ${order}.\n\nPlease show your confirmation number for pickup`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" value={name} onChange={(e) => setName(e.target.value)}
      ></input>

      <label htmlFor="phone">phone:</label>
      <input id="phone" value={phone}onChange={(e) => setPhone(e.target.value)}
      ></input>

      <label htmlFor="address">address:</label>
      <input id="address" value={address} onChange={(e) => setAddress(e.target.value)}
      ></input>

      <label htmlFor="order"
      >order:</label>
      <input id="order" value={order} onChange={(e) => setOrder(e.target.value)}></input>

      <button type="submit">Submit Order</button>
    </form>
  )
}

export default FoodOrderForm;