import React, { Component } from 'react'
import * as d3 from 'd3'

class BarChart extends Component {
    componentDidMount() {
        const data = [ 2, 5, 6, 4]
        this.drawBarChart(data)
    }

    componentDidUpdate() {
        const { data } = this.props
        if(data=== '' || data === undefined) {
            return null
        }
        console.log(data)
        const parsed = data.map(d => d.position)
        this.drawBarChart(parsed)
    }

    drawBarChart(data) {
        console.log('data')
        console.log(data)
        const canvasHeight = 400
        const canvasWidth = 600
        const scale = 20

        const svgCanvas = d3.select(this.refs.canvas)
            .append('svg')
            .attr('width', canvasWidth)
            .attr('height', canvasHeight)
            .style('border', '1px solid black')

        svgCanvas.selectAll('rect')
            .data(data).enter()
            .append('rect')
            .attr('width', 40)
            .attr('height', (datapoint) => datapoint * scale)
            .attr('fill', 'black')
            .attr('x', (datapoint, iteration) => iteration * 45)
            .attr('y', (datapoint) => canvasHeight - datapoint * scale)
    }
    render() { return <div ref='canvas'></div> }
}

export default BarChart