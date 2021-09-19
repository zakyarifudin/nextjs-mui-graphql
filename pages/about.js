import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProTip from "../src/settings/ProTip";
import Link from "../src/settings/Link";
import Copyright from "../src/settings/Copyright";
import Head from "next/head";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>My page | About</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
