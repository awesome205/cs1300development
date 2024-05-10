import React from "react";
import { useState } from "react";
import "./App.css";
import HeartIcon from "./hearticon.js";
function CountryCard(props) {
  const [isLiked, setIsLiked] = useState(false);
  function handleClick() {
    props.country.liked = !props.country.liked;
    setIsLiked(!isLiked);
    if (props.country.liked) {
      props.addLikedCountries(props.country);
    } else {
      props.removeLikedCountries(props.country);
    }
    props.country.time = new Date().toLocaleString();
  }
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={require("./data/unsplashphoto/" + props.country.alpha2 + ".jpg")}
        alt="Afghanistan"
        width="600"
        height="300"
      />
      <div className="pdiv">
        <h3>{props.country.name}</h3>
        <div onClick={handleClick}>
          {props.country.liked ? (
            <HeartIcon
              width="28"
              height="28"
              color="#FF0000"
              pathclass="heart-icon-path-filled"
            />
          ) : (
            <HeartIcon
              width="28"
              height="28"
              color="#FFFFFF"
              pathclass="heart-icon-path"
            />
          )}
        </div>
        <p className="smalltext">
          Continent: {props.country.continent} <br></br> Landlocked:
          {props.country.landlocked
            ? "Yep. No water in sight."
            : "Nope. There's water nearby."}
        </p>
        <p className="para">{props.country.description}</p>
      </div>
    </div>
  );
}
export default CountryCard;
