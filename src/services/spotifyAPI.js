import axios from 'axios'

const baseUrl = ''

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const getOne = async id => {
    const res = await axios.get(`${baseUrl}/${id}`)
    return res.data
}

export default { getAll, getOne }