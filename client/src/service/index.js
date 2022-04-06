import Axios from 'axios'

const Client = Axios.create({ baseURL: '/api/' })

export default Client
