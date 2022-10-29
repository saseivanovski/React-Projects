import React, { useState, useEffect } from "react";
import axios from "axios";

function FirstPage() {
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
      {posts.map((e) => (
        <div key={e.id}>{e.title}</div>
      ))}
    </>
  );
}

export default FirstPage;
