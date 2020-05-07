import React, { useState, useEffect } from 'react'
import spotify from './services/spotifyAPI'
import mapper from './services/dataMapper'
import LengthGraph from './components/LengthGraph'
import PickList from './components/PickList'
import BarChart from './components/BarChart'

const App = () => {
    const [token, setToken] = useState('')
    const [finList, setFinList] = useState('')
    const [ukList, setUkList] = useState('')
    const [usaList, setUsaList] = useState('')
    const [presentList, setPresentList] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const newToken = await spotify.getSpotifyAuth()
            setToken(newToken)
        }
        fetchData()
    }, [])

    // NOTE needs to have update / refresh option too
    const handleListLoads = async () => {
        const loadList = async (url) => {
            let list = await spotify.getPlaylist(url, token)
            list = mapper.mapApiListResponse(list)
            return list
        }

        if(finList==='') {
            const finList = await loadList('37i9dQZEVXbMxcczTSoGwZ')
            setFinList(finList)
        }

        if(ukList==='') {
            const ukList = await loadList('37i9dQZEVXbLnolsZ8PSNw')
            setUkList(ukList)
        }

        if(usaList==='') {
            const usaList = await loadList('37i9dQZEVXbLRQDuF5jeBp')
            setUsaList(usaList)
        }
    }

    // Handles initial load for FinTOP50 (Default first list)
    if(token !== '') {
        handleListLoads()
    }

    const handleRadioChange = (e) => {
        if(e.target.value==='fin') {
            setPresentList(finList)
        }

        if(e.target.value==='uk') {
            setPresentList(ukList)
        }

        if(e.target.value==='usa') {
            setPresentList(usaList)
        }
    }

    return (
        <div>
            <h1>DataViz</h1>
            <p>This page contains few data visualizations of example tracklists on Spotify.</p>
            <PickList handleRadioChange={handleRadioChange} />
            <LengthGraph data={presentList} />
            <BarChart data={presentList} />
        </div>
    )
}

export default App