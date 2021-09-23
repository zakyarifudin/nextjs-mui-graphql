import { gql, useQuery } from "@apollo/client";
import ErrorMessage from "../src/components/ErrorMessage";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import { useState } from "react";

export const ALL_COUNTRIES_QUERY = gql`
  query countries($eq: String!) {
    countries(filter: { continent: { eq: $eq } }) {
      code
      continent {
        code
        name
      }
      name
      capital
      currency
      languages {
        code
        name
        native
      }
      emoji
      emojiU
    }
  }
`;

export const allCountriesQueryVars = {
  eq: "EU",
};

export default function CountryList() {
  const initCart = {
    items: [],
    totalItem: 0,
    totalQty: 0,
    subTotal: 0,
    grandTotal: 0,
  };
  const [cart, setCart] = useState(initCart);

  const handleAddCart = (item) => {
    const { items } = cart;

    let checkItemExist = items.filter(
      (itemExist) => itemExist.id === item.id
    ).length;
    let updateCart;

    if (checkItemExist === 0) {
      let newItem = { ...item, qty: 1, total: item.price };
      let addItem = [...items, newItem];

      let totalAll = calculateTotal(addItem);
      updateCart = {
        items: addItem,
        totalItem: totalAll.totalItem,
        totalQty: totalAll.totalQty,
        subTotal: totalAll.subTotal,
        grandTotal: totalAll.grandTotal,
      };

      setCart(updateCart);
    } else {
      let updateItem = [];

      items.map((itemU) => {
        let oldItem = itemU;
        if (itemU.id === item.id) {
          let qty = itemU.qty + 1;
          let total = itemU.price * qty;
          oldItem = { ...itemU, qty, total };
        }
        updateItem.push(oldItem);
      });

      let totalAll = calculateTotal(updateItem);
      updateCart = {
        items: updateItem,
        totalItem: totalAll.totalItem,
        totalQty: totalAll.totalQty,
        subTotal: totalAll.subTotal,
        grandTotal: totalAll.grandTotal,
      };

      setCart(updateCart);
    }
  };

  const calculateTotal = (items) => {
    let totalItem = 0;
    let totalQty = 0;
    let subTotal = 0;
    let grandTotal = 0;

    items.map((item) => {
      totalItem += 1;
      totalQty += item.qty;
      subTotal += item.qty * item.price;
      grandTotal += item.qty * item.price;
    });

    return {
      totalItem,
      totalQty,
      subTotal,
      grandTotal,
    };
  };

  const { loading, error, data } = useQuery(ALL_COUNTRIES_QUERY, {
    variables: allCountriesQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading." />;
  if (loading) return <div style={{ margin: "auto" }}>Loading....</div>;

  const { countries } = data;
  console.log(cart);

  // console.log(countries);

  let menuData = [];
  countries.map((country, index) =>
    menuData.push({
      id: index + 1,
      country: country.name,
      code: country.code,
      capital: country.capital,
      currency: country.currency,
      languages: country.languages,
      price: ((index + 1) % 10) * 1000 + 1000,
    })
  );

  return (
    <div>
      <Container>
        <Typography variant="h4" align="center" sx={{ margin: "1rem 0" }}>
          Country List
        </Typography>
        <Grid container spacing={2}>
          {menuData.map((item, index) => (
            <Grid
              item
              sx={{ cursor: "pointer" }}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={item.id}
            >
              <Card onClick={() => handleAddCart(item)}>
                <Box sx={{ height: 150 }}>
                  <CardContent>
                    <Typography variant="h6" component="div" align="center">
                      {item.country}
                    </Typography>
                    <Typography variant="body1" align="center" gutterBottom>
                      {item.capital}
                    </Typography>
                    <Typography variant="caption" align="center">
                      Rp. {item.price}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
