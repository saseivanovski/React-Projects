import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import classes from "./AllProducts.module.css";

function SecondPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/women's clothing"
        );
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
    <div className={classes.products}>
      {posts.map((e) => {
        return <Card key={e.id} title={e.title} img={e.image} id={e.id} />;
      })}
    </div>
  );
}

export default SecondPage;
