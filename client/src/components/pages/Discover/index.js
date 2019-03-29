import React, { Component } from "react";
// import logo from '../../../images/logo.svg'; // with import
// import bulmaCarousel from 'bulma-extensions/bulma-carousel/dist/js/bulma-carousel';
import Charity from "../Charity";
import CharityList from "../CharityList";
// import charityArray from "../../../images/charityArray"


import {
    Container,
    Title
} from 'bloomer';

class Discover extends Component {
    state = {
        charityValue: null,
        showList: true,
        charityArray: []
        // error: ""
    };

    handleCharitySelection = charityID => {
        var selectedCharity = this.state.charityArray[charityID];
        this.setState({ charityValue: selectedCharity, showList: false })
    }

    render() {
        return (
            <div>
                {this.state.showList ? (
                    <ul>
                        {this.state.charityArray.map(charity => (
                            <CharityList
                                charityFn={this.handleCharitySelection}
                                key={charity.id}
                                name={charity.name}
                                CharityId={charity.id}
                            />
                        ))}
                    </ul>
                ) : (<div>
                </div>)}
                <Container>
                    <Title>DISCOVER PAGE</Title>
                    {this.state.charityValue ? (
                        <Charity
                            {...this.state.charityValue}
                        />
                    ) : (
                            <div>
                                {/* keep blank */}
                            </div>
                        )}
                </Container>
            </div>
        )
    }
}
export default Discover;