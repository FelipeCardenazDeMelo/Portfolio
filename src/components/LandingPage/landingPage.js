import styled from "styled-components";
import React from "react";

import Header from "./Header/header";
import Content from "./Content/Content";
import SeeMore from "./SeeMore/SeeMore";


const LandingPageStles = styled.div `
    width: 100%;
    height: 100vh;
    background-color: ${ ({theme}) => theme.background};
    display: flex;
    position: relative;
    flex-wrap: wrap;
`


export default function LandingPage () {

    return (
            <LandingPageStles id="Inicial">
                <Header></Header>
                <Content></Content>
                <SeeMore></SeeMore>
            </LandingPageStles>
    );
};