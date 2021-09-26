import React from "react";

const Cart = (props) => {
  // Calculate Total income of all youtubers
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
      {/* show youtuber name */}
      {props.cartItems.map((items) => (
        <h4 key={items.id}>{items.youtuberName}</h4>
      ))}

      <div className="text-center mt-4">
        <button className="btn btn-danger w-100">Buy now</button>
      </div>
    </div>
  );
};

export default Cart;
