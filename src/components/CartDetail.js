import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import currencyIDR from "../../lib/currencyIDR.js";
import numberFormatID from "../../lib/numberFormatID.js";

export default function CartDetail({ cart }) {
  // console.log(cart);
  const { items, totalItem, totalQty, subTotal, grandTotal } = cart;

  return (
    <Container sx={{ my: "3rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Cart Detail
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width={50}>No.</TableCell>
              <TableCell align="left">Code</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" width={50}>
                  {index + 1}
                </TableCell>
                <TableCell align="left">{item.code}</TableCell>
                <TableCell align="left">{item.country}</TableCell>
                <TableCell align="right">
                  {numberFormatID(item.price)}
                </TableCell>
                <TableCell align="right">{numberFormatID(item.qty)}</TableCell>
                <TableCell align="right">
                  {numberFormatID(item.total)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ float: "right", margin: "2rem 0" }} width={400}>
        <Grid container rowSpacing={1}>
          <Grid item width={200}>
            <Typography variant="body1" align="left" gutterBottom>
              Total Item
            </Typography>
          </Grid>
          <Grid item width={200}>
            <Typography variant="body1" align="right" gutterBottom>
              {numberFormatID(totalItem)}
            </Typography>
          </Grid>
          <Grid item width={200}>
            <Typography variant="body1" align="left" gutterBottom>
              Total Qty
            </Typography>
          </Grid>
          <Grid item width={200}>
            <Typography variant="body1" align="right" gutterBottom>
              {numberFormatID(totalQty)}
            </Typography>
          </Grid>
          <Grid item width={200}>
            <Typography variant="body1" align="left" gutterBottom>
              Sub Total
            </Typography>
          </Grid>
          <Grid item width={200}>
            <Typography variant="body1" align="right" gutterBottom>
              {currencyIDR(subTotal)}
            </Typography>
          </Grid>
          <Grid item width={200}>
            <Typography variant="body1" align="left" gutterBottom>
              Grand Total
            </Typography>
          </Grid>
          <Grid item width={200}>
            <Typography variant="body1" align="right" gutterBottom>
              {currencyIDR(grandTotal)}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
