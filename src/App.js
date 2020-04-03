import React from 'react'
import spotify from './services/spotifyAPI'

const App = () => {
    return (
        <div>
            <p>Hello app</p>
            <button onClick={() => spotify.getSpotifyAuth()}>Get Auth</button>
            <button onClick={() => spotify.getTrack()}>Get Track</button>
        </div>
    )
}

export default App