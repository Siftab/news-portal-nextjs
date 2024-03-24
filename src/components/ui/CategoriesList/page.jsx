import useCategoryList from "@/components/Hooks/useCategoryList";
import { Box } from "@mui/material";
import React from "react";

const CategoriesList = async () => {
  const allCategoryLists = await useCategoryList();
  console.log(allCategoryLists);
  return <Box>this is Category List</Box>;
};

export default CategoriesList;
