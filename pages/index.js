import * as React from "react";
import Box from "@mui/material/Box";
// import ProTip from "../src/settings/ProTip";
// import Link from "../src/Link";
import Copyright from "../src/settings/Copyright";
import {
  Container,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Badge,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";

export default function Index() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const open = Boolean(anchorEl);
  const openProfile = Boolean(anchorElProfile);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  let menuData = [
    {
      url: "/about",
      title: "About",
      body: "About My Website",
    },
    {
      url: "/continent",
      title: "Continent",
      body: "Continent List",
    },
    {
      url: "/country",
      title: "County",
      body: "Country List",
    },
    {
      url: "/form",
      title: "Form",
      body: "Try Form",
    },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton style={{ color: "white", marginRight: 10 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <div>
            <IconButton color="inherit" size="large" onClick={handleMenu}>
              <Badge badgeContent={2} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
            <Menu
              id="menu-shop"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              // transformOrigin={{
              //   vertical: "top",
              //   horizontal: "right",
              // }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Payment</MenuItem>
              <MenuItem onClick={handleClose}>Delivery</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
            </Menu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuProfile}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElProfile}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              // transformOrigin={{
              //   vertical: "top",
              //   horizontal: "right",
              // }}
              open={openProfile}
              onClose={handleCloseProfile}
            >
              <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
              <MenuItem onClick={handleCloseProfile}>My account</MenuItem>
              <MenuItem onClick={handleCloseProfile}>Settings</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: "1rem" }}>
        <Typography variant="h2" align="center" gutterBottom>
          Top Menu
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginBottom: "2rem" }}
        >
          This is your menu ready to use it!
        </Typography>
        <Grid container spacing={2}>
          {menuData.map((item, index) => (
            <Link href={item.url} key={index}>
              <Grid
                item
                sx={{ cursor: "pointer" }}
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div" align="center">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {item.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Link>
          ))}
        </Grid>
      </Container>
    </>
  );
}
