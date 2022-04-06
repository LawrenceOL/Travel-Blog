import Axios from 'axios'

const Client = Axios.create({ baseURL: 'https://localhost:3000/api/' })

export default Client