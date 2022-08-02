import React, { useState, useEffect } from "react"
import backend from "../services/backend"
import { useParams } from "react-router-dom"
// Redux
import { shallowEqual, useSelector } from "react-redux"
import Transaction from "../components/transaction/Transaction"
import { formatter } from "../lib/functions"
// Components

export default function Account() {
  const token = useSelector((state) => state.auth.token)
  const params = useParams()
  const account = useSelector((state) => state.account.find((a) => a._id === params.accountId), shallowEqual)
  const [loading, setLoading] = useState(true)
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    backend.account
      .getAccountTransactions(token, params.accountId)
      .then((res) => setTransactions(res.data.body), setLoading(false))
      .catch((err) => console.error(err))
  }, [])

  return (
    <main className="account">
      <header>
        <h3>{`${account.name} (x${account.number})`} </h3>
        <p className="account__amount">{formatter.format(account.balance)}</p>
        <p className="account__description">{account.description}</p>
      </header>

      {loading ? "loading..." : transactions.map((transaction) => <Transaction key={transaction._id} />)}
    </main>
  )
}
