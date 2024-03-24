import React from "react";

const useSpecificNews = async (id) => {
  const res = await fetch(
    `https://the-news-portal-server.vercel.app/news/${id}`
  );
  const data = res.json();
  //   console.log("data details", data);
  return data;
};

export default useSpecificNews;
