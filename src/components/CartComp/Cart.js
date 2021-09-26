import React from "react";

const Cart = (props) => {
  let totalIncome = props.cartItems.reduce(
    (previous, current) => previous + current.monthlyIncome,
    0
  );

  return (
    <div className="text-white">
      <h1 className="text-center text-info fw-bold">Cart Items</h1>
      <h4>Total Youtuber: {props.cartItems.length}</h4>
      <h4>Total Income: ${totalIncome}</h4>
      <hr />
      {props.cartItems.map((items) => (
        <h4>{items.youtuberName}</h4>
      ))}

      <div className="text-center mt-4">
        <button className="btn btn-danger">Buy now</button>
      </div>
    </div>
  );
};

export default Cart;
