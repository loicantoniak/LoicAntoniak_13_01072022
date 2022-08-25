import React, { useState, useEffect } from "react"
import backend from "../services/backend"
// Redux
import { useDispatch, useSelector } from "react-redux"
import { getName } from "../redux/reducers/user"
import { setAccount } from "../redux/reducers/account"
// Components
import Account from "../components/account/Account"
import Input from "../components/input/Input"
import Spinner from "../components/spinner/spinner"

export default function User() {
  const userName = useSelector((state) => getName(state))
  const token = useSelector((state) => state.auth.token)
  const [editMode, setEditMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [accounts, setAccounts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    backend.account
      .getUserAccounts(token)
      .then((res) => {
        setAccounts(res.data.body), dispatch(setAccount(res.data.body)), setLoading(false)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <main className="user">
      <header>
        <h1>
          Welcome back
          <br />
          {!editMode && `${userName}!`}
        </h1>
        {editMode ? (
          <Input onHideEditMode={() => setEditMode(false)} />
        ) : (
          <button className="button edit-button" onClick={() => setEditMode(true)}>
            Edit Name
          </button>
        )}
      </header>

      {loading
        ? <Spinner />
        : accounts.map((account) => (
            <Account
              key={account._id}
              id={account._id}
              title={account.name}
              number={account.number}
              amount={account.balance}
              description={account.description}
            />
          ))}
    </main>
  )
}
