import React, { useState } from 'react'

const PickList = ({ handleRadioChange }) => {
    const [checked, setChecked] = useState('fin')

    const handleChange = (e) => {
        setChecked(e.target.value)
        handleRadioChange(e)
    }

    return (
        <div>
            <form>
                <input
                    type='radio'
                    value='fin'
                    onChange={handleChange}
                    checked={checked==='fin'}
                />
                Finland Top50
                <input
                    type='radio'
                    value='uk'
                    onChange={handleChange}
                    checked={checked==='uk'}
                />
                UK Top50
                <input
                    type='radio'
                    value='usa'
                    onChange={handleChange}
                    checked={checked==='usa'}
                />
                USA Top50
            </form>
        </div>
    )
}

export default PickList