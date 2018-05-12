import React from 'react'
import styled from 'styled-components'

import { Circle } from './Circle'

const Container = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props => props.itemHeight ? `${props.itemHeight}px` : '100px'};
`

export const Item = ({ props }) => {

    return (
        <Container>
            <Circle />
            {props.children}
        </Container>
    )
}