/* eslint-env node */
import Axios from "axios"

const axios = Axios.create({ withCredentials: false })

const apiV1 = "http://localhost:3001/api/v1"

const auth = {
  async login(formData) {
    return await axios.post(`${apiV1}/user/login`, formData)
  },
}

const user = {
  async getUser(token) {
    return await axios.post(`${apiV1}/user/profile`, "", {
      headers: {
        Authorization: "Bearer" + token,
      },
    })
  },

  async updateUserName(formData, token) {
    return await axios.put(`${apiV1}/user/profile`, formData, {
      headers: {
        Authorization: "Bearer" + token,
      },
    })
  },
}

const account = {
  async getUserAccounts(token) {
    return await axios.post(`${apiV1}/accounts/user-accounts`, "", {
      headers: {
        Authorization: "Bearer" + token,
      },
    })
  },
  async getAccountTransactions(token, accountId) {
    return await axios.post(`${apiV1}/accounts/${accountId}/transactions`, "", {
      headers: {
        Authorization: "Bearer" + token,
      },
    })
  },
}

const backend = {
  auth,
  user,
  account,
}

export default backend
