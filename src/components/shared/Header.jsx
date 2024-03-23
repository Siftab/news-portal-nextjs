import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import headingImage from "@/assests/The Dragon News.png";
const moment = require("moment"); // require
// moment().format();

const Header = () => {
  return (
    <Box className="my-10">
      <Container>
        <Image
          src={headingImage}
          alt="heading"
          width={500}
          height={500}
          className="mx-auto"
        />
        <Typography
          variant="body1"
          color="gray"
          className="w-full text-center my-6"
        >
          Journalism without Fear and Favour
        </Typography>
        <Typography className="w-full text-center">
          {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
