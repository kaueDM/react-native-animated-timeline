import React from 'react'
import styled from 'styled-components'
import * as Animatable from 'react-native-animatable'

const StyledLine = styled.View`
    background-color: ${props => props.borderColor || '#fff'};
    width: ${props => props.borderWidth ? `${props.borderWidth}px` : '2px'};
    height: ${props => props.lineHeight ? `${props.lineHeight}px` : '25px'};
    position: absolute;
`

const AnimatedLine = Animatable.createAnimatableComponent(StyledLine)

export const Line = ({ props }) => (
    <AnimatedLine {...props} animation={props.animation || 'fadeInDown'} />
)
