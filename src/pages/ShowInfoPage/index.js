import React from "react";
import { useParams } from "react-router-dom";
import ShowInfoHeader from "../../components/showInfoComponents/ShowHeader";
import ShowContent from "../../components/showInfoComponents/ShowContent";
import { Container } from "react-bootstrap";

export default function ShowInfoPage(props) {
  const id = useParams();

  console.log(id);
  return (
    <>
      <ShowInfoHeader />
      <Container>
        <ShowContent />
      </Container>
    </>
  );
}
