import React from "react";

const Sort = ({ onSortChange, currentSort }) => {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div>
      <select value={currentSort} onChange={handleSortChange}>
        <option value="popularity">Sorting</option>
        <option value="Alphabetical Descending">Z->A Descending</option>
        <option value="Alphabetical Ascending">A->Z Ascending</option>
      </select>
    </div>
  );
};

export default Sort;
