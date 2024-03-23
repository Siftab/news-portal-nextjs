import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const Footer = () => {
  const NavItems = [
    {
      route: "Home",
      pathName: "/",
    },
    {
      route: "Pages",
      pathName: "/pages",
    },
    {
      route: "category",
      pathName: "/category",
    },
    {
      route: "News",
      pathName: "/news",
    },
    {
      route: "About",
      pathName: "/about",
    },
    {
      route: "Contact",
      pathName: "/contact",
    },
  ];
  return (
    <Box>
      <Box className="bg-black px-2 py-10 ">
        <Container>
          <Box
            className="w-full text-center "
            //   direction="row"
            sx={{
              "& svg": {
                color: "white",
              },
            }}
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Box>
          <Box className="w-full text-center">
            {NavItems.map((item) => (
              <Link key={item} href={item.pathName}>
                <Button sx={{ my: 2, color: "white" }}>{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Typography variant="body2" color="gray" textAlign="center">
            &#169; 2023 The dragon news , designed by Zahid Hossain Sifat
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
