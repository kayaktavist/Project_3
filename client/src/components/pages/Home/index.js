import React from "react";
import logo from '../../../images/logo.svg'; // with import

import {
  Container,
  Column,
  Button,
  // Box, 
  // Hero,
  Title,
  Nav,
  NavLeft,
  NavItem,
  Image,
  Tile,
  Box
} from 'bloomer';

function Home(props) {
  return (
    <div>
     <Container>
        <Title>ACTIVEST</Title>
        <Tile isAncestor>
          <Tile isParent>
            <Tile isChild render={
              props => (
                <Box {...props}>
                  <Title>
                    <Image isRatio="2:1" src={logo} />
                  </Title>
                </Box>
              )
            } />
          </Tile>
          <Tile isSize={6} isVertical isParent>
            <Tile isChild render={
              props => (
                <Box {...props}>
                  <h2>“The secret to change is to focus all of your energy not on fighting the old, but on building the new.” – Socrates</h2>
                </Box>
              )
            } />
            <Tile isChild render={
              props => (
                <Box {...props}>
                  <Title>
                    <Button href= "/discover" isColor='danger' isSize='large' isOutlined>FIND A CAUSE</Button>
                  </Title>


                  {/* <Column hasTextAlign='centered'>
                    <Button isColor='success' isOutlined>isOutlined</Button>
                  </Column> */}


                </Box>
              )
            } />
          </Tile>
        </Tile>
        </Container>
    </div>
  );
}

export default Home;
