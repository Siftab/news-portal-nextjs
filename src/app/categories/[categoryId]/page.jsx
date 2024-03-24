import useCategoryNews from "@/components/Hooks/useCategoryNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const CategoryId = async ({ params, searchParams }) => {
  //   console.log(searchParams.category, "in pot");
  const categoryNews = await useCategoryNews(searchParams.category);
  console.log(categoryNews);
  return (
    <Box>
      <Typography variant="h6">
        dynamic news for {searchParams.category} : {categoryNews.length}
      </Typography>
      <Box>
        <Grid container spacing={2}>
          {categoryNews.map((news) => (
            <Grid
              item
              xs={6}
              className=""
              key={news.id}
              //   rowSpacing={1}
              //   columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Card className="w-full mt-8">
                <CardActionArea>
                  {/* <CardMedia
            component="img"
            height="140"
            image={topNews}
            alt="green iguana" 
          />*/}
                  <Image
                    src={news.image_url}
                    alt="cardImg"
                    width={400}
                    height={400}
                    className="w-full h-[250px]"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {news.title.length > 25
                        ? news.title.slice(0, 25) + "..."
                        : news.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 300
                        ? news.details.slice(0, 300) + "..."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CategoryId;
