import axios from "axios";
import React from "react";

const useCategoryList = async () => {
  const res = await axios.get(
    "https://the-news-portal-server.vercel.app/categories"
  );
  const list = res.data.data;
  return list;
};

export default useCategoryList;
