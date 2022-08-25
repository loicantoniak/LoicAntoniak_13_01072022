import React, { useState } from "react"
import style from "./Transaction.module.scss"
import { format } from "date-fns/esm"
import { formatter } from "../../lib/functions"
import EditItem from "../editItem/editItem"
import backend from "../../services/backend"
import { useDispatch, useSelector } from "react-redux"
import { updateTransaction } from "../../redux/reducers/transaction"
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"

export default function Transaction(transaction) {
  const { description, amount, type, category, comment, createdAt, balance } = transaction
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [editMode, setEditMode] = useState({ category: false, comment: false })

  console.log(transaction)

  function handleChangeEditMode(query, bool) {
    setEditMode((prev) => ({ ...prev, [query]: bool }))
  }

  async function handleSubmitCategory(value) {
    const newTransaction = { ...transaction, category: value }
    try {
      const res = await backend.transaction.updateCategoryTransaction(token, newTransaction)
      dispatch(updateTransaction(res.data.body))
      handleChangeEditMode("category", false)
    } catch (error) {
      console.log(error)
    }
  }
  async function handleSubmitComment(value) {
    const newTransaction = { ...transaction, comment: value }
    try {
      const res = await backend.transaction.updateCommentTransaction(token, newTransaction)
      dispatch(updateTransaction(res.data.body))
      handleChangeEditMode("comment", false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={style.container}>
      <div className={style.resume}>
        <div onClick={() => setOpen(!open)}>
          {open ? <FontAwesomeIcon icon={faAngleUp} size="xl" /> : <FontAwesomeIcon icon={faAngleDown} size="xl" />}
        </div>
        <p>{format(new Date(createdAt), "PPP")}</p>
        <p>{description}</p>
        <p>{formatter.format(amount)}</p>
        <p>{formatter.format(balance)}</p>
      </div>

      {open && (
        <div className={style.info}>
          <p>Transaction type : {type}</p>

          <EditItem
            label={"Category :"}
            data={category}
            onSubmit={handleSubmitCategory}
            editMode={editMode.category}
            onChangeEditMode={(bool) => handleChangeEditMode("category", bool)}
          />

          <EditItem
            label={"Notes :"}
            data={comment}
            onSubmit={handleSubmitComment}
            editMode={editMode.comment}
            onChangeEditMode={(bool) => handleChangeEditMode("comment", bool)}
          />
        </div>
      )}
    </div>
  )
}
