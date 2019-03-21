import React from "react";
import Prism from "../../../common/Prism";
import { Container, Title, Content } from "bloomer";

function Props() {
  return (
    <Container>
      <Content>
        <Title hasTextAlign="centered">Props</Title>
        <p>
          Props are a core part of React, they are the primary way in which we
          can pass around data in a React application. You use them in a very
          similar way to html attributes.
        </p>
        <Prism>
          {`
<Title text="Hello!" />

function Title(props){
  return <h1>{props.text}</h1>;
}

`}
        </Prism>
      </Content>
      <Content>
        <p>
          This might seem a bit confusing, but remember JSX is just some syntax
          sugar. This is what's happening underneath the hood.
        </p>
        <Prism>
          {`
React.createElement(Title, {
  text: "Hello!"
});

function Title(props) {
  return React.createElement("h1", null, props.text);
}

`}
        </Prism>
      </Content>
      <Content>
        <p>
          Every "HTML attribute" that we add is actually added just a key value
          pair we are adding into the props argument.
        </p>
      </Content>
    </Container>
  );
}

export default Props;
