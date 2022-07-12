/* eslint-env node */
import Axios from "axios"

const axios = Axios.create({ withCredentials: false })

const apiV1 = "http://localhost:3001/api/v1"

const auth = {
  async login(formData) {
    return await axios.post(`${apiV1}/user/login`, formData)
  },
}

const backend = {
  auth,
}

export default backend
