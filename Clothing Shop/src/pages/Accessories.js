import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import classes from "../AllProducts.module.css";
import { fetchPosts } from "../helper";

function SecondPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const handleFetchData = (data, state) => {
    if (state === "ok") {
      setPosts(data);
    } else {
      setError(data);
    }
  };

  useEffect(() => {
    fetchPosts(
      "https://fakestoreapi.com/products/category/jewelery",
      handleFetchData
    );
  }, []);

  if (error !== "") {
    return <div>{error}</div>;
  }

  return (
    <div className={classes.products}>
      {posts.map((e) => {
        return <Card key={e.id} title={e.title} img={e.image} id={e.id} />;
      })}
    </div>
  );
}

export default SecondPage;
