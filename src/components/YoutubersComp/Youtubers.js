import React, { useState, useEffect } from "react";
import Cart from "../CartComp/Cart";
import Youtuber from "../YoutuberComp/Youtuber";

const Youtubers = (props) => {
  const [youtubers, setYoutube] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (youtuber) => {
    const newCartItems = [...cartItems, youtuber];
    setCartItems(newCartItems);
  };

  useEffect(() => {
    fetch("./youtuber.json")
      .then((res) => res.json())
      .then((data) => setYoutube(data));
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-9 col-md-9 col-lg-9">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {youtubers.map((youtuber) => (
              <Youtuber
                key={youtuber.id}
                youtuber={youtuber}
                handleAddToCart={handleAddToCart}
              ></Youtuber>
            ))}
          </div>
        </div>
        <div className="col-3 col-md-3 col-lg-3">
          <Cart cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Youtubers;
