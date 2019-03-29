import React, { Component } from "react";
// import logo from '../../../images/logo.svg'; // with import
import Charity from "../Charity";
import CharityList from "../CharityList";
import charityArray from "../../../images/charityArray"

import API from "../../../utils/API"


import {
    Container,
    Title
} from 'bloomer';

class Discover extends Component {
    state = {
        charityValue: null,
        showList: true,
        charityArray: charityArray,
        // error: ""
    };
    componentDidMount() {
        console.log(this.state.charityArray)
        // this.loadCharities();
    }

    handleCharitySelection = charityID => {
        var selectedCharity = this.state.charityArray[charityID];
        console.log(charityID)
        this.setState({ charityValue: selectedCharity, showList: false })
    }


    loadCharities = () => {
        API.getAllCharities()
            .then(res => {
                console.log(res)
                this.setState({ charityArray: res.data })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Container>
                    <Title>DISCOVER PAGE</Title>
                    {this.state.showList ? (
                        <ul>
                            {this.state.charityArray.map((charity, index) => (
                                <CharityList
                                    charityFn={this.handleCharitySelection}
                                    key={index}
                                    name={charity.name}
                                    CharityId={index}
                                />
                            ))}
                        </ul>
                    ) : (<div>
                    </div>)}

                    {this.state.charityValue ? (
                        <div>

                            <Charity
                                {...this.state.charityValue}
                            />
                        </div>
                    ) : (
                            <div>
                                <p>Testing..Testing..</p>
                            </div>
                        )}
                </Container>
            </div>
        )
    }
}
export default Discover;