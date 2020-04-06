import axios from 'axios'
import qs from 'qs'

const apicredentials = process.env.REACT_APP_BASIC

// https://developer.spotify.com/documentation/web-api/reference/playlists/

/* IDEA, several TOP50 official playlists, analyze genres of the songs

    FINLAND50 uri spotify:playlist:37i9dQZEVXbMxcczTSoGwZ
    */
const setConfig = (token) => {
    return {
        method: 'GET',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'authorization': `Bearer ${token}`
        },
        url: ''
    }
}


const getSpotifyAuth = async () => {
    try {
        const data = { grant_type: 'client_credentials' }
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'authorization': `Basic ${apicredentials}`
            },
            url: 'https://accounts.spotify.com/api/token',
            data: qs.stringify(data)
        }

        const res = await axios(options)
        console.log(res.data)
        return res.data.access_token

    } catch (error) {
        console.log(error)
    }
}

const getTrack = async (trackId, token) => {
    const optionsBase = setConfig(token)
    console.log({ ...optionsBase, url: `https://api.spotify.com/v1/tracks/${trackId}` })
    const res = await axios({ ...optionsBase, url: `https://api.spotify.com/v1/tracks/${trackId}` })
    console.log(res.data)
    return res.data
}

const getPlaylist = async (playlistId, token) => {
    const optionsBase = setConfig(token)
    const res = await axios({ ...optionsBase, url: `https://api.spotify.com/v1/playlists/${playlistId}` })
    console.log(res.data)
    return res.data
}

export default { getSpotifyAuth, getTrack, getPlaylist }