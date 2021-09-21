import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CountryList from "./CountryList";
import ErrorMessage from "./ErrorMessage";
import Image from "next/image";
import LoadingSVG from "../assets/loading.svg";

export const ALL_CONTINENTS_QUERY = gql`
  query {
    continents {
      code
      name
    }
  }
`;

export default function ContinentList() {
  const { loading, error, data } = useQuery(ALL_CONTINENTS_QUERY, {
    // notifyOnNetworkStatusChange: true,
  });

  const [continentCode, setContinentCode] = useState("");

  if (error) return <ErrorMessage message="Error loading continents." />;
  if (loading)
    return (
      <div style={{ margin: "auto", width: 200 }}>
        <Image src={LoadingSVG} />
      </div>
    );

  const { continents } = data;

  return (
    <>
      <div style={{ margin: "auto", width: 300 }}>
        <Autocomplete
          id="continent-select"
          sx={{ width: 300 }}
          options={continents}
          autoHighlight
          getOptionLabel={(option) => option.name}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option.code} ({option.name})
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a continent"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
          onChange={(event, newValue) => {
            // console.log(newValue.code);
            setContinentCode(newValue.code);
          }}
        />
      </div>
      <div style={{ marginTop: "3rem" }}>
        <CountryList continentCode={continentCode} />
      </div>
    </>
  );
}
