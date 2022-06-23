import React from "react";
import AppBarHeader from "../components/AppBarHeader/AppBarHeader";
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import DataTable from "../components/DataTable/DataTable";



const Home = () => {



  return (
    <>
      <AppBarHeader />
      <Container maxWidth="md">
        <Typography
          component="h3"
          variant="body1"
          align="justify"
          marginTop={5}
          >
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
        </Typography>
       
        <DataTable />
      </Container>
    </>
  );
}

export default Home;
