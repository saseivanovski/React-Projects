import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        console.log({ response });
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.resposne.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, [id]);

  if (posts.length === 0) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div>
        <div key={id}>
          <h2>Title: {posts.title}</h2>
          <p>Price: {posts.price}</p>
          <p>Description: {posts.description}</p>
          <p>Category: {posts.category}</p>
          <p>Rating: {posts.rating.rate}</p>
          <p>Count: {posts.rating.count}</p>
        </div>
      </div>
    </>
  );
}

export default Details;
