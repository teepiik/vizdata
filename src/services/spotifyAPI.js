import axios from 'axios'

const baseUrl = ''
const apicredentials = 'add_me:addmetoo'
//let clientId = process.env.REACT_APP_CLIENT_ID
//let secret = process.env.REACT_APP_SECRET


const getSpotifyAuth = async () => {
    // TODO test the headers + body combo, decode envies
    // try n catch?
    const req = {
        headers: { Authorization: `Basic ${apicredentials}` },
        body: { grant_type: 'client_credentials' }
    }
    const res = await axios.post('https://accounts.spotify.com/api/token', req)
    return res.data
}

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const getOne = async id => {
    const res = await axios.get(`${baseUrl}/${id}`)
    return res.data
}

export default { getAll, getOne, getSpotifyAuth }