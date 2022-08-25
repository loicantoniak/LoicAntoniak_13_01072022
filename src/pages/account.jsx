import React, { useState, useEffect } from "react"
import backend from "../services/backend"
import { useParams } from "react-router-dom"
import { formatter } from "../lib/functions"
// Redux
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { setTransaction } from "../redux/reducers/transaction"
// Components
import Transaction from "../components/transaction/Transaction"
import Spinner from "../components/spinner/spinner"

export default function Account() {
  const token = useSelector((state) => state.auth.token)
  const params = useParams()
  const account = useSelector((state) => state.account.find((a) => a._id === params.accountId), shallowEqual)
  const [loading, setLoading] = useState(true)
  const transactions = useSelector((state) => state.transaction)
  const dispatch = useDispatch()

  useEffect(() => {
    backend.account
      .getAccountTransactions(token, params.accountId)
      .then((res) => persistTransactions(res.data.body))
      .catch((err) => console.error(err))
  }, [])

  function persistTransactions(trans) {
    dispatch(setTransaction(trans))
    setLoading(false)
  }
  
  return (
    <main className="account">
      <header>
        <h3>{`${account.name} (x${account.number})`} </h3>
        <p className="account__amount">{formatter.format(account.balance)}</p>
        <p className="account__description">{account.description}</p>
      </header>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="account_transactions_header">
            <p>Date</p>
            <p>Description</p>
            <p>Amount</p>
            <p>Balance</p>
          </div>
          {transactions.map((t) => (
            <Transaction key={t._id} {...t} />
          ))}
        </>
      )}
    </main>
  )
}
