import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import topNews from "@/assests/top-news.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
      <Card className="w-full mt-8">
        <CardActionArea>
          {/* <CardMedia
            component="img"
            height="140"
            image={topNews}
            alt="green iguana" 
          />*/}
          <Image
            src={topNews}
            alt="cardImg"
            width={400}
            height={400}
            className="w-full"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              BitCOins are on the higest
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in
              quas rerum ratione voluptate numquam illo provident doloremque
              unde dicta.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box className="">
        <Grid container spacing={3}>
          <Grid item xs={6} className="">
            <Card className="w-full mt-8">
              <CardActionArea>
                {/* <CardMedia
            component="img"
            height="140"
            image={topNews}
            alt="green iguana" 
          />*/}
                <Image
                  src={topNews}
                  alt="cardImg"
                  width={400}
                  height={400}
                  className="w-full"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    BitCOins are on the higest
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    in quas rerum ratione voluptate numquam illo provident
                    doloremque unde dicta.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} className="">
            <Card className="w-full mt-8">
              <CardActionArea>
                {/* <CardMedia
            component="img"
            height="140"
            image={topNews}
            alt="green iguana" 
          />*/}
                <Image
                  src={topNews}
                  alt="cardImg"
                  width={400}
                  height={400}
                  className="w-full"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    BitCOins are on the higest
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    in quas rerum ratione voluptate numquam illo provident
                    doloremque unde dicta.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} className="">
            <Card className="w-full mt-8">
              <CardActionArea>
                {/* <CardMedia
            component="img"
            height="140"
            image={topNews}
            alt="green iguana" 
          />*/}
                <Image
                  src={topNews}
                  alt="cardImg"
                  width={400}
                  height={400}
                  className="w-full"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    BitCOins are on the higest
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    in quas rerum ratione voluptate numquam illo provident
                    doloremque unde dicta.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} className="">
            <Card className="w-full mt-8">
              <CardActionArea>
                {/* <CardMedia
            component="img"
            height="140"
            image={topNews}
            alt="green iguana" 
          />*/}
                <Image
                  src={topNews}
                  alt="cardImg"
                  width={400}
                  height={400}
                  className="w-full"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    BitCOins are on the higest
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    in quas rerum ratione voluptate numquam illo provident
                    doloremque unde dicta.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} className="">
            <Card className="w-full mt-8">
              <CardActionArea>
                {/* <CardMedia
            component="img"
            height="140"
            image={topNews}
            alt="green iguana" 
          />*/}
                <Image
                  src={topNews}
                  alt="cardImg"
                  width={400}
                  height={400}
                  className="w-full"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    BitCOins are on the higest
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    in quas rerum ratione voluptate numquam illo provident
                    doloremque unde dicta.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LatestNews;
