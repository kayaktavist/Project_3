import React from "react";
import { Hero, HeroBody, Title } from "bloomer";

function Home(props) {
  return (
    <div>
      <Hero isColor="info" isSize="medium">
        <HeroBody hasTextAlign="centered">
          <Title>Welcome!</Title>
          <p style={{ maxWidth: 600, margin: "auto" }}>
            This project is a work in progress. The ultimate goal is to give
            students a collection of resources as well as an example of a more
            complex MERN application that utilizes Redux.
          </p>
        </HeroBody>
      </Hero>
    </div>
  );
}

export default Home;
