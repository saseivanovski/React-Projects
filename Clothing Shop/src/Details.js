import React from "react";
import { useParams } from "react-router-dom";

function Details(props) {
  const { id } = useParams();
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>Rating</p>
        <p>{id}</p>
        <p>Price</p>
      </div>
    </div>
  );
}

export default Details;
