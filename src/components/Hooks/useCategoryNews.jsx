import axios from "axios";
import React from "react";

const useCategoryNews = async (category) => {
  //   const res = await fetch(
  //     `https://the-news-portal-server.vercel.app/news?category=${category}`,
  //     {
  //       cache: "no-store",
  //     }
  //     // `https://the-news-portal-server.vercel.app/news?category=${category}`
  //   );]
  const res = await axios.get(
    `https://the-news-portal-server.vercel.app/news?category=${category}`
  );
  const data = await res.data.data;
  //   console.log(data, category);
  return data;
};

export default useCategoryNews;
