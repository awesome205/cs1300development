import "./App.css";
import React from "react";
import countries from "./data/countries-short.json";
import Countrycard from "./countrycard";
// import { createApi } from "unsplash-js";
// import * as nodeFetch from "node-fetch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Filter from "./filter";
import Sort from "./sorting";
import CountryListMap from "./countrylistmap";

function App() {
  const [likedCountries, setLikedCountries] = React.useState([]);
  const [filter, setFilter] = React.useState({ continent: "All", landlocked: "All" });
  const [sort, setSort] = React.useState("")

  function addLikedCountries(country) {
    setLikedCountries(prev => [...likedCountries, country]);
  }
  function removeLikedCountries(country) {
    setLikedCountries(prev => prev.filter(c => c.id !== country.id));
  }
   const handleFilterChange = (newFilters) => {
     setFilter(newFilters);
   };

   const handleSortChange = (newSort) => {
     setSort(newSort);
   };

   const resetFilters = () => {
     setFilter({ continent: "All", landlocked: "All" });
     setSort("");
   };

  return (
    <div className="App">
      <div className="flexcontain">
        <main className="App-header">
          <h1 className="pagetitle">Countries</h1>
          <div className="pdiv">
            <div>
              <Filter
                onFilterChange={handleFilterChange}
                currentFilters={filter}
              />
            </div>
            <div>
              <Sort onSortChange={handleSortChange} currentSort={sort} />
            </div>
            <div>
              <button onClick={resetFilters}>Reset</button>
            </div>
            <CountryListMap
              destinations={countries}
              filters={filter}
              sort={sort}
              addLikedCountries={addLikedCountries}
              removeLikedCountries={removeLikedCountries}
            />
          </div>
        </main>
        <aside className="Likedcards">
          <div className="spacingdiv">
            <h1 className="bigtext"> Countries I've Travelled To</h1>
            <div className="paradiv2">
              {likedCountries.length === 0 ? (
                <p>Click on the heart to add countries to your list!</p>
              ) : likedCountries.length === 1 ? (
                <p>You've traveled to one country!</p>
              ) : (
                <p>You've traveled to {likedCountries.length} countries!</p>
              )}
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Continent</TableCell>
                    <TableCell align="right">Landlocked</TableCell>
                    <TableCell align="right">Time Added</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {likedCountries.map((country) => (
                    <TableRow
                      key={country.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {country.name}
                      </TableCell>
                      <TableCell align="right">{country.continent}</TableCell>
                      <TableCell align="right">
                        {country.landlocked ? "Yes" : "No"}
                      </TableCell>
                      <TableCell align="right">{country.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
