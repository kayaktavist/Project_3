import React from "react";
import logo from '../../../images/logo.svg'; // with import
// import bulmaCarousel from 'bulma-extensions/bulma-carousel/dist/js/bulma-carousel';

import {
    Container,
    Title,
    Tile,
    Box
} from 'bloomer';

const Discover = props => (
    <div>
        <Container>
            <Title>DISCOVER PAGE</Title>
            <Tile isAncestor>
                <Tile isParent>
                    <Tile isChild render={
                        props => (
                            <Box {...props}>
                                <Title>GRAPH</Title>
                            </Box>
                        )} />
                </Tile>
                <Tile isParent>
                    <Tile isChild render={
                        props => (
                            <Box {...props}>
                                <Title>Carousel

                                </Title>
                            </Box>
                        )} />
                </Tile>
            </Tile>
            <Tile isParent>
                <Tile isChild render={
                    props => (
                        <Box {...props}>
                            <Title>Company's Blurb</Title>
                        </Box>
                    )} />
            </Tile>
        </Container>
    </div>
)

export default Discover;