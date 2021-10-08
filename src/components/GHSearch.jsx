import React from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

const GHSearch = () => {
  const performSearch = async (searchQuery) => {
    debugger;
    const response = await axios({
      method: "GET",
      url: "https://api.github.com/search/users/",
      data: searchQuery,
    });
  };

  return (
    <>
      <Input
        data-cy="user-search-input"
        type="text"
        name="search"
        placeholder="Input GH username"
      />
      <Button
        data-cy="user-search-btn"
        name="search"
        onClick={(e) => {
          performSearch(e.target.value);
        }}
      >
        Search
      </Button>
    </>
  );
};

export default GHSearch;
