import useSpecificNews from "@/components/Hooks/useSpecificNews";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const DetailsNews = async ({ params }) => {
  const newsData = await useSpecificNews(params.newsId);
  console.log(newsData);
  return (
    <Box>
      {/* {params.newsId} */}
      <Grid container spacing={2}>
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
          <Box>content</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsNews;
