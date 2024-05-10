import React from "react";

const Filters = ({ onFilterChange, currentFilters }) => {
  const handleContinentChange = (event) => {
    onFilterChange({ ...currentFilters, continent: event.target.value });
  };

  const handlePriceChange = (event) => {
    onFilterChange({ ...currentFilters, landlocked: event.target.value });
  };

  return (
    <div>
      <select value={currentFilters.continent} onChange={handleContinentChange} className="filters1">
        <option value="All">All Continents</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select value={currentFilters.landlocked} onChange={handlePriceChange}>
        <option value="All">Landlocked?</option>
        <option value="LandLocked">Landlocked</option>
        <option value="Not LandLocked">Not LandLocked</option>
      </select>
    </div>
  );
};

export default Filters;
