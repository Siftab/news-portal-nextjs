import CategoriesList from "@/components/ui/CategoriesList/page";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const CategoriesLayout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <h1>
              <CategoriesList />
            </h1>
          </Grid>
          <Grid item xs={9}>
            <h1>{children}</h1>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
