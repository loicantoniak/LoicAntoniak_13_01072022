import React, { useState } from "react"
// import backend from "../services/backend"
// Redux
import { useSelector } from "react-redux"
import { getName } from "../redux/reducers/user"
// Components
import Account from "../components/account/Account"
import Input from "../components/input/Input"

export default function User() {
  const userName = useSelector((state) => getName(state))
  const [editMode, setEditMode] = useState(false)

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
      <Account title="Argent Bank Checking (x8349)" amount={2082.79} description="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount={10928.42} description="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount={184.3} description="Current Balance" />
    </main>
  )
}
