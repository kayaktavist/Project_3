import React from "react";
import LineChart from "../../graph/LineChart"
import datastuff from "../../graph/datacomponent"
import Carousel from 'react-bootstrap/Carousel'
import Carousels from "../../carousels/Carousels"



import {
    Container,
    Title,
    Tile,
    Box
} from 'bloomer';

const Charity = props => (

    <div>
        <Container>
            <Title>Charity PAGE</Title>
            <Tile isAncestor>
                <Tile isParent>
                    <Tile isChild render={
                        props => (
                            <Box {...props}>
                                <LineChart data={datastuff} size={[500, 300]} />
                            </Box>
                        )} />
                </Tile>
                <Tile isParent>
                    <Tile isChild render={
                        props => (
                            <Box {...props}>
                                <Carousels/>
                            </Box>
                        )} />
                </Tile>
            </Tile>
            <Tile isParent>
                <Tile isChild render={
                    props => (
                        <Box {...props}>
                            <Title>Company Blurb</Title>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>

                        </Box>
                    )} />
            </Tile>
        </Container>
    </div>
)

export default Charity;