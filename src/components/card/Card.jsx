import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const { apart } = props;

  return (
    <div className="card-wrapper">
      <Link to={`/apart/${apart.apartId}`}>
        <h2>{apart.title}</h2>
      </Link>
      <div className="card-image-container">
        <img className="card-first-image" src={apart.images[0]} alt="" />
        <div className="card-inner-image-container">
          <img className="card-other-images" src={apart.images[1]} alt="" />
          <img className="card-other-images" src={apart.images[2]} alt="" />
        </div>
      </div>
      <p>Fiyat: {apart.price}₺</p>
    </div>
  );
};

export default Card;
