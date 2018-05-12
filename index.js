import React from 'react'
import styled from 'styled-components'
import { FlatList } from 'react-native'

import { Line } from './src/Line'
import { Circle } from './src/Circle'

import { _handleLineHeight } from './src/util'

// Content container
const Container = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props => props.itemHeight ? `${props.itemHeight}px` : '100px'};
`

export class Timeline extends React.Component {

    constructor(props) {
        super(props)
        this.key = props.key
        this.data = props.data
        this.size = props.size
        this.borderColor = props.borderColor
        this.borderWidth = props.borderWidth
    }

    render() {
        const { data, size, borderColor, borderWidth } = this.props

        return (
            <FlatList
                {...this.props}
                data={data}
                style={{ width: '100%' }}
                keyExtractor={item => item[key]}
                renderItem={({ item, index }) => {
                    index === 0 && (this._renderFirstItem(item))
                    index > 0 && index < data.length - 1 && (this._renderMiddleItem(item))
                    index === data.length - 1 && (this._renderLastItem(item))
                }}
            />
        )
    }

    _renderFirstItem(item) {
        const { itemHeight, size, content, borderWidth } = this.props
        return (
            <Container>
                <Circle />
                <Line
                    lineHeight={_handleLineHeight(itemHeight, size)}
                    style={{ bottom: 0, left: (size / 2) - (borderWidth / 2) }}
                />
            </Container>
        )
    }

    _renderMiddleItem(item) {
        const { itemHeight, size, content, borderWidth } = this.props
        return (
            <Container>
                <Line
                    lineHeight={_handleLineHeight(itemHeight, size)}
                    style={{ top: 0, left: (size / 2) - (borderWidth / 2) }}
                />
                <Circle />
                <Line
                    lineHeight={_handleLineHeight(itemHeight, size)}
                    style={{ bottom: 0, left: (size / 2) - (borderWidth / 2) }}
                />
            </Container>
        )
    }

    _renderLastItem(item) {
        const { itemHeight, size, content, borderWidth } = this.props
        return (
            <Container>
                <Line
                    lineHeight={_handleLineHeight(itemHeight, size)}
                    style={{ top: 0, left: (size / 2) - (borderWidth / 2) }}
                />
                <Circle />
            </Container>
        )
    }

}