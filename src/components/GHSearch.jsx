import React, { useState } from "react";
import { Button, Input, Form } from "semantic-ui-react";
import axios from "axios";

const GHSearch = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [viewPrompt, setViewPrompt] = useState(false)

  const performSearch = async (searchQuery) => {
    if(!searchQuery) { setViewPrompt(true) }
    const response = await axios({
      method: "GET",
      url: "https://api.github.com/search/users/",
      data: { q: searchQuery },
    });
    setSearchResults(response.data.items);
  };

  let searchResultArray = searchResults.map((result) => {
    return <h2 key={result.id}>{result.login}</h2>;
  });

  return (
    <>
      <Form>
        <Input
          data-cy="user-search-input"
          type="text"
          name="search"
          value={searchQuery}
          placeholder="Input GH username"
          onChange={(e) => {
            setViewPrompt(false)
            setSearchQuery(e.target.value);
          }}
        />
        <Button
          data-cy="user-search-btn"
          name="search"
          onClick={() => {
            performSearch(searchQuery);
          }}
        >
          Search
        </Button>
      </Form>
      <div data-cy="user-search-result">{searchResultArray}</div>
      {viewPrompt && <h3 data-cy="input-prompt">Please enter a search term</h3>}
    </>
  );
};

export default GHSearch;
