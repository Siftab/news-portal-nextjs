import { Box } from "@mui/material";
import React from "react";

const CategoryId = ({ params, searchParams }) => {
  return <Box>dynamic news :{searchParams.category}</Box>;
};

export default CategoryId;
