import React from 'react';
import styled from 'styled-components';
import {SlArrowDown} from 'react-icons/sl';

import { thirdColorLight } from '../../../assets/UI/variables';

const SeeMoreStyle = styled.div `
    width: 10%;
    height: 10%;
    margin-left: 45%;
    margin-top: -5%;
    .icon {
        width: 100%;
        color: ${ ({theme}) => theme.seeMore};
        transition: ease-in-out .3s;

    }
`

export default function SeeMore () {
    return (
        <SeeMoreStyle>
            <SlArrowDown fontSize={55} class="icon"/>
        </SeeMoreStyle>
    )
}