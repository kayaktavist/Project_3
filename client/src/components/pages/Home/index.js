import React from "react";
import logo from "../../../images/logo.svg"; // with import
import { connect } from "react-redux";
import { changeName } from "../../../state/name/actions";

import { Container, Button, Title, Image, Tile, Box } from "bloomer";

function Home(props) {
  console.log(props);

  return (
    <div>
      <Container>
        {/* <h1>Hello {redux.state.name}</h1> */}
        <Title>ACTIVEST</Title>
        <button onClick={() => props.increaseCount()}>
          Increment! count is {props.counter}
        </button>
        <button onClick={() => props.nameSwap("Abel")}>
          Change name to Abel
        </button>
        <p>Welcome {props.name}</p>
        <Tile isAncestor>
          <Tile isParent>
            <Tile
              isChild
              render={props => (
                <Box {...props}>
                  <Title>
                    <Image isRatio="2:1" src={logo} />
                  </Title>
                </Box>
              )}
            />
          </Tile>
          <Tile isSize={6} isVertical isParent>
            <Tile
              isChild
              render={props => (
                <Box {...props}>
                  <h2>
                    “The secret to change is to focus all of your energy not on
                    fighting the old, but on building the new.” – Socrates
                  </h2>
                </Box>
              )}
            />
            <Tile
              isChild
              render={props => (
                <Box {...props}>
                  <Title>
                    <Button
                      href="/discover"
                      isColor="danger"
                      isSize="large"
                      isOutlined
                    >
                      FIND A CAUSE
                    </Button>
                  </Title>
                </Box>
              )}
            />
          </Tile>
        </Tile>
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nameSwap(name){
      dispatch(changeName(name))
    },
    increaseCount(){
      dispatch({type: "INCREMENT"})
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
