import React from "react";

const CharityList = props => (
    <ul id={props.CharityId} key={props.CharityId} onClick={() => props.charityFn(props.CharityId)} >
        {props.name}
    </ul>
);

export default CharityList;