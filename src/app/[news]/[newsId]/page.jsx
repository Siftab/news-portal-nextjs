import useSpecificNews from "@/components/Hooks/useSpecificNews";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const DetailsNews = async ({ params }) => {
  const newsData = await useSpecificNews(params.newsId);
  console.log(newsData);
  return (
    <Box>
      {/* {params.newsId} */}
      <Grid container spacing={2} className="mt-3">
        <Grid item xs={6}>
          <Container>
            <Image
              src={newsData.data.thumbnail_url}
              alt="img"
              width={400}
              height={400}
              className="w-full"
            />
            <Grid container spacing={2} className="mt-5">
              <Grid item xs={6}>
                <Image
                  src={newsData.data.image_url}
                  alt="mini_img"
                  height={400}
                  width={400}
                />
              </Grid>
              <Grid item xs={6}>
                <Image
                  src={newsData.data.image_url}
                  alt="mini_img"
                  height={400}
                  width={400}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h5">{newsData.data.title}</Typography>
            <Box className="flex items-center space-x-4 mt-5">
              <Image
                src={newsData.data.author.img}
                alt="author img"
                width={60}
                height={60}
                className="rounded-full"
              ></Image>
              <Typography variant="body1">
                {newsData.data.author.name}
              </Typography>
              <Typography variant="body1">
                Date:{newsData.data.author.published_date}
              </Typography>
            </Box>
            <Typography variant="body1" className="whitespace-pre-line mt-7">
              {newsData.data.details}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsNews;
