import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

// Bottom axis
const XAxis = ({ top, bottom, left, right, height, scale }) => {
    const axis = useRef(null)
    useEffect(() => {
        d3.select(axis.current).call(d3.axisBottom(scale))
    })

    return (
        <g
            className='axis x'
            ref={axis}
            transform={`translate(${left}, ${height - bottom})`}
        />
    )
}

// Left axis
const YAxis = ({ top, bottom, left, right, height, scale }) => {
    const axis = useRef(null)
    useEffect(() => {
        d3.select(axis.current).call(d3.axisLeft(scale))
    })

    return (
        <g
            className='axis y'
            ref={axis}
            transform={`translate(${left}, ${top})`}
        />
    )
}

const Rect = ({ data, x, y, height, top, bottom, label }) => {
    return (
        <g transform={`translate(${x(data.position)}, ${y(data.value)})`}>
            <rect
                width={x.bandwidth()}
                height={height - bottom - top - y(data.value)}
                className='bar'
            />
            {label !== 'Duration (in seconds)' &&
            <text
                transform={`translate(${x.bandwidth() / 2}, ${-2})`}
                textAnchor='middle'
                alignmentBaseline='baseline'
                fill='black'
                fontSize='10'
            >
                {data.value}
            </text>
            }
        </g>
    )
}

const BarChart = props => {
    const data = [...props.data]
    if(data === '') return null

    const x = d3
        .scaleBand()
        .range([0, props.width - props.left - props.right])
        .domain(data.map(d => d.position))
        .padding(0.2)

    const y = d3
        .scaleLinear()
        .range([props.height - props.top - props.bottom, 0])
        .domain([0, d3.max(data, d => d.value)])

    return (
        <div>
            <h3>{props.label}</h3>
            <svg width={props.width} height={props.height}>
                <XAxis
                    scale={x}
                    top={props.top}
                    bottom={props.bottom}
                    left={props.left}
                    right={props.right}
                    height={props.height}
                />
                <YAxis
                    scale={y}
                    top={props.top}
                    bottom={props.bottom}
                    left={props.left}
                    right={props.right}
                />
                <g transform={`translate(${props.left}, ${props.top})`}>
                    {data.map((d, i) => (
                        <Rect
                            data={d}
                            key={d.position}
                            x={x}
                            y={y}
                            top={props.top}
                            bottom={props.bottom}
                            height={props.height}
                            label={props.label}
                        />
                    ))}
                </g>
            </svg>
        </div>
    )
}

export default BarChart