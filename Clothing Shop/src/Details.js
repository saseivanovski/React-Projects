import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details(props) {
  const { title } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
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
  }, []);

  return (
    <>
      <div>
        {posts
          .filter((data) => data.title === title)
          .map((data, id) => (
            <div key={id}>
              <h2>Title: {data.title}</h2>
              <p>Price: {data.price}</p>
              <p>Description: {data.description}</p>
              <p>Category: {data.category}</p>
              <p>Rating: {data.rating.rate}</p>
              <p>Count: {data.rating.count}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Details;
