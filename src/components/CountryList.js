import { gql, useQuery } from "@apollo/client";
import ErrorMessage from "./ErrorMessage";
import { DataGrid } from "@mui/x-data-grid";
import Image from "next/image";
import LoadingSVG from "../assets/loading.svg";

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
    }
  }
`;

export default function CountryList({ continentCode }) {
  const { loading, error, data } = useQuery(ALL_COUNTRIES_QUERY, {
    variables: {
      eq: continentCode,
    },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading." />;
  if (loading)
    return (
      <div style={{ margin: "auto", width: 100 }}>
        <Image src={LoadingSVG} />
      </div>
    );

  const { countries } = data;

  console.log(countries);

  const columns = [
    { field: "id", headerName: "No.", width: 100 },
    { field: "country", headerName: "Country", minWidth: 150, flex: 1 },
    { field: "code", headerName: "Code", width: 150 },
    { field: "capital", headerName: "Capital", minWidth: 150, flex: 1 },
    { field: "currency", headerName: "Currency", minWidth: 150, flex: 1 },
    {
      field: "languages",
      headerName: "Language",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
      valueGetter: (params) => {
        let languages = "";
        params.row.languages.map(
          (param) =>
            (languages =
              languages === "" ? param.name : `${languages}, ${param.name}`)
        );
        return languages;
      },
    },
  ];

  let rows = [];
  countries.map((country, index) =>
    rows.push({
      id: index + 1,
      country: country.name,
      code: country.code,
      capital: country.capital,
      currency: country.currency,
      languages: country.languages,
    })
  );

  return (
    <div style={{ height: 600, width: "80%", margin: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
