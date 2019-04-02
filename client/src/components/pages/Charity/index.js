import React from "react";
import LineChart from "../../graph/LineChart"
import datastuff from "../../graph/datacomponent"
// import Carousel from 'react-bootstrap/Carousel'
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
            <Title>{props.page.title}</Title>
            <Tile isAncestor>
                <Tile isParent>
                    <Tile isChild render={
                        bloomerProps => (
                            <Box {...bloomerProps}>
                                <LineChart data={datastuff} size={[500, 300]} />
                            </Box>
                        )} />
                </Tile>
                <Tile isParent>
                    <Tile isChild render={
                        bloomerProps => (
                            <Box {...bloomerProps}>
                                <Carousels {...props} />
                            </Box>
                        )} />
                </Tile>
            </Tile>
            <Tile isParent>
                <Tile isChild render={
                    bloomerProps => (
                        <Box {...bloomerProps}>
                            {console.log('prop', JSON.stringify(props))}
                            <Title>{props.page.title}</Title>

                            <h3>{props.page.description}</h3>
                        </Box>
                    )} />
            </Tile>
        </Container>
    </div>
)

export default Charity;