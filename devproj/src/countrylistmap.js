import React from "react";
import CountryCard from "./countrycard";

function CountryListMap(props) {
    const filteredDestinations = props.destinations.filter((destination) => {
      return (
        (props.filters.continent === "All" ||
          destination.continent === props.filters.continent) &&
        (props.filters.landlocked === "All" ||
          destination.landlocked === (props.filters.landlocked === "LandLocked"))
      );
    });
    if (props.sort === "Alphabetical Ascending") {
      filteredDestinations.sort((a, b) => a.name.localeCompare(b.name));
    } else if (props.sort === "Alphabetical Descending") {
      filteredDestinations.sort((a, b) => b.name.localeCompare(a.name));
    }
  return (
    <>
      {filteredDestinations.map((country, index) => {
        return (
          <div key={index}>
            <CountryCard
              addLikedCountries={props.addLikedCountries}
              removeLikedCountries={props.removeLikedCountries}
              key={index}
              country={country}
            />
          </div>
        );
      })}
    </>
  );
}
export default CountryListMap;