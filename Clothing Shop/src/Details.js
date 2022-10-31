import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details(props) {
  const { id } = useParams();
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
      <p>{id}</p>
      <div>
        {posts
          .filter((data) => data.id === id)
          .map((data, id) => (
            <div key={id}>
              <h1>{data.title}</h1>
            </div>
          ))}
      </div>
    </>
  );
}

export default Details;
