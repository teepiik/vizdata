import axios from 'axios'
import qs from 'qs'

//const baseUrl = 'https://api.spotify.com/'
const apicredentials = process.env.REACT_APP_BASIC
let token = null
let getOptionsBase = {
    method: 'GET',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'authorization': `Bearer ${token}`
    },
    url: ''
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
        token = res.data.access_token
        return res.data

    } catch (error) {
        console.log(error)
    }
}

const getTrack = async () => {
    const res = await axios({ ...getOptionsBase, url: 'https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V' })
    console.log(res.data)
    return res.data
}

export default { getSpotifyAuth, getTrack }