import React from "react";
import "./Youtuber.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Youtuber = (props) => {
  const {
    youtuberName,
    youtuberImg,
    channelName,
    contentType,
    createdDate,
    subscriber,
    monthlyIncome,
  } = props.youtuber;
  return (
    <div className="col">
      <div className="card h-100 border-bottom border-success">
        <img
          src={youtuberImg}
          className="card-img-top img-card-circle mx-auto my-2"
          alt="youtuber Images"
        />
        <div className="card-body">
          <h4 className="card-title text-center">{channelName}</h4>
          <ol className="px-3">
            <li>
              <span className="text-green"> YoutuberName:</span> {youtuberName}
            </li>
            <li>
              <span className="text-danger">ContentType:</span> {contentType}
            </li>
            <li>
              <span className="text-primary">Subscriber</span> {subscriber}
            </li>
            <li>
              <span className="text-success">CreatedDate:</span> {createdDate}
            </li>
            <li>
              <span className="text-green">MonthlyIncome:</span> $
              {monthlyIncome}
            </li>
          </ol>
        </div>
        <div className="card-footer text-center bg-info">
          <button
            className="btn btn-success"
            onClick={() => props.handleAddToCart(props.youtuber)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="ms-1">ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Youtuber;
