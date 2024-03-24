import LatestNews from "@/components/ui/LatestNEws/LatestNews";
import SideBar from "@/components/ui/SideBar/SideBar";
import { Grid } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <LatestNews />
          </Grid>
          <Grid item xs={4}>
            <SideBar />
          </Grid>
        </Grid>
      </>
    </>
  );
}
