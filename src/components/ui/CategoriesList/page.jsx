import useCategoryList from "@/components/Hooks/useCategoryList";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CategoriesList = async () => {
  const allCategoryLists = await useCategoryList();
  console.log(allCategoryLists);
  return (
    <Box className="mt-5 bg-gray-300 px-5 py-3">
      <Typography variant="h6">All Categories</Typography>

      <Divider />
      <Stack rowGap={2}>
        {allCategoryLists.map((item) => (
          <Button variant="outlined" key={item.id}>
            <Link
              href={`/categories/news?category=${item.title.toLowerCase()}`}
            >
              {item.title}
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoriesList;
