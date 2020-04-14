import React, { useState, useEffect } from 'react'
import spotify from './services/spotifyAPI'
import mapper from './services/dataMapper'
import LengthGraph from './components/LengthGraph'

const App = () => {
    const [token, setToken] = useState('')
    const [finList, setFinList] = useState('')
    //const [ukList, setUkList] = useState('')
    //const [usaList, setUsaList] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const newToken = await spotify.getSpotifyAuth()
            setToken(newToken)
        }
        fetchData()
    }, [])

    const handleFinListLoad = async () => {
        if(finList==='') {
            let fin = await spotify.getPlaylist('37i9dQZEVXbMxcczTSoGwZ', token)
            fin = mapper.mapApiListResponse(fin)
            setFinList(fin)
        }
    }

    // Handles initial load for FinTOP50 (Default first list)
    if(finList==='' && token !== '') {
        handleFinListLoad()
    }

    return (
        <div>
            <p>Hello app</p>
            <button onClick={() => spotify.getSpotifyAuth()}>Get Auth</button>
            <button onClick={() => spotify.getTrack('2TpxZ7JUBn3uw46aR7qd6V', token)}>Get Track</button>
            <button onClick={() => handleFinListLoad()}>TOP50 Finland</button>
            <LengthGraph data={finList} />
        </div>
    )
}

export default App