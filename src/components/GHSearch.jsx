import React, { useState } from "react";
import { Button, Input, Form } from "semantic-ui-react";
import axios from "axios";

const GHSearch = () => {
  const [searchQuery, setSearchQuery] = useState();

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
      <Form>
        <Input
          data-cy="user-search-input"
          type="text"
          name="search"
          value={searchQuery}
          placeholder="Input GH username"
          onChange={(e) => {setSearchQuery(e.target.value)}}
        />
        <Button
          data-cy="user-search-btn"
          name="search"
          onClick={(e) => {
            performSearch(searchQuery);
          }}
        >
          Search
        </Button>
      </Form>
    </>
  );
};

export default GHSearch;
