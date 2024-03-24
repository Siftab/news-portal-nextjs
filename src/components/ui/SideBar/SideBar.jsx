import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import topNews2 from "@/assests/top-news2.png";

const SideBar = () => {
  return (
    <Box>
      <Card className="w-full mt-8">
        <CardActionArea>
          {/* <CardMedia
            component="img"
            height="140"
            image={topNews2}
            alt="green iguana" 
          />*/}
          <Image
            src={topNews2}
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
      <Card className="w-full mt-8">
        <CardActionArea>
          {/* <CardMedia
            component="img"
            height="140"
            image={topNews2}
            alt="green iguana" 
          />*/}
          <Image
            src={topNews2}
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
    </Box>
  );
};

export default SideBar;
