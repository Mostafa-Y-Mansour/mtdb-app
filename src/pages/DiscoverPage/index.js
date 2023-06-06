import React, { useState } from "react";
import SearchBox from "../../components/discoverComponents/SearchBox";
import { Container } from "react-bootstrap";
import Result from "./../../components/discoverComponents/Result";

export default function DiscoverPage(props) {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Container>
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
      </Container>
      <Result searchText={searchText} />
    </>
  );
}
