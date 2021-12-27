import React from "react";
import { Container } from "semantic-ui-react";
import Header from "../components/Header";

export default (props) => {
  return (
    <Container>
      <div>
        <Header />
        {props.children}
      </div>
    </Container>
  );
};
