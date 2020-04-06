import React, { useState, useEffect } from 'react'
import spotify from './services/spotifyAPI'

const App = () => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const newToken = await spotify.getSpotifyAuth()
            setToken(newToken)
        }
        fetchData()
    }, [])

    return (
        <div>
            <p>Hello app</p>
            <button onClick={() => spotify.getSpotifyAuth()}>Get Auth</button>
            <button onClick={() => spotify.getTrack('2TpxZ7JUBn3uw46aR7qd6V', token)}>Get Track</button>
            <button onClick={() => spotify.getPlaylist('37i9dQZEVXbMxcczTSoGwZ', token)}>TOP50 Finland</button>
        </div>
    )
}

export default App