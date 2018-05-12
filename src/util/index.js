
export const _handleLineHeight = (itemHeight, circleSize) => {
    let item = itemHeight || 100
    let circle = circleSize || 50

    return item / 2 - circleSize
}
