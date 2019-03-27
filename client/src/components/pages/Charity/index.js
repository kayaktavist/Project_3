import React from "react";


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

export default Charity;