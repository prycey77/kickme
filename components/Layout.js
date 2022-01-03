import React from "react";
import { Container } from "semantic-ui-react";
import Header from "../components/Header";
import "semantic-ui-css/semantic.min.css";


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
