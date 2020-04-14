import React from 'react'

const LengthGraph = ({ data }) => {
    // Prevent promise nullpointer error
    if(data==='') {
        return null
    }

    return (
        <div>Graph here
            <p>{data.map(t => t.position)}</p>
        </div>
    )
}

export default LengthGraph