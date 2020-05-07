import React from 'react'
//import { render } from 'react-dom'
import { scaleLinear, scaleBand } from 'd3-scale'
import XYAxis from './linechartComps/xy-axis'
import Line from './linechartComps/line'
import { line, curveMonotoneX } from 'd3-shape'
import { extent } from 'd3-array'
import { transition } from 'd3-transition'

const LengthGraph = ({ data }) => {
    // Prevent promise nullpointer error
    if(data==='') {
        return null
    }

    const parentWidth = 1000

    const margins = {
        top: 10,
        right: 50,
        bottom: 50,
        left: 50,
    }

    const width = parentWidth - margins.left - margins.right
    const height = 200 - margins.top - margins.bottom

    const ticks = 10
    const t = transition().duration(1000)

    const xScale = scaleBand()
        .domain(data.map(d => d.position))
        .rangeRound([0, width]).padding(0.1)

    const yScale = scaleLinear()
        .domain(extent(data, d => d.duration))
        .range([height, 0])
        .nice()

    const lineGenerator = line()
        .x(d => xScale(d.position))
        .y(d => yScale(d.duration))
        .curve(curveMonotoneX)

    return (
        <div>
            <h3>Duration</h3>
            <svg
                className="lineChartSvg"
                width={width + margins.left + margins.right}
                height={height + margins.top + margins.bottom}
            >
                <g transform={`translate(${margins.left}, ${margins.top})`}>
                    <XYAxis {...{ xScale, yScale, height, ticks, t }} />
                    <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
                </g>
            </svg>
        </div>
    )
}

export default LengthGraph