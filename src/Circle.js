import React from 'react'
import styled from 'styled-components'

const StyledCircle = styled.View`
    width: ${props => props.size ? `${props.size}px` : '50px'};
    height: ${props => props.size ? `${props.size}px` : '50px'};
    border-radius: ${props => props.size ? props.size / 2 : '25px'};
    border-width: ${props => props.borderWidth ? `${props.borderWidth}px` : '2px'};
    border-color: ${props => props.borderColor || '#fff'};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 5px;
`

const AnimatedCircle = Animatable.createAnimatableComponent(StyledCircle)

export const Circle = ({ props }) => (
    <AnimatedCircle {...props} animation={props.animation || 'fadeInDown'} />
)