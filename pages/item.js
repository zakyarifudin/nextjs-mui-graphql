import { Container, Typography, Grid } from "@mui/material";
import React from "react";

export default function ItemList() {
  return (
    <div>
      <Container>
        <Typography variant="h4" align="center" sx={{ marginTop: "1rem" }}>
          Item List
        </Typography>
        <Grid></Grid>
      </Container>
    </div>
  );
}
