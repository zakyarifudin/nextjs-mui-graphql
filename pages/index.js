import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/settings/ProTip";
// import Link from "../src/Link";
import Copyright from "../src/settings/Copyright";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta example
        </Typography>

        <Link href="/about">
          <Button variant="contained">Go to the about page</Button>
        </Link>
        <Copyright />
      </Box>
    </Container>
  );
}
