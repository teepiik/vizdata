import React from 'react'

const App = () => {
    let test = process.env.REACT_APP_TEST
    console.log(test)
    return (
        <div>
            <p>Hello app</p>
        </div>
    )
}

export default App