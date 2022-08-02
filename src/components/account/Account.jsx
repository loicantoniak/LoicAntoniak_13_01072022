import React from "react"
import PropTypes from "prop-types"
import style from "./Account.module.scss"
import { Link } from "react-router-dom"
import { formatter } from "../../lib/functions"

Account.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default function Account({ id, title, amount, description, number }) {
  return (
    <section className={style.account}>
      <div className={style.contentWrapper}>
        <h3 className={style.title}>{`${title} (x${number})`} </h3>
        <p className={style.amount}>{formatter.format(amount)}</p>
        <p className={style.description}>{description}</p>
      </div>
      <div className={style.contentWrapper}>
        <Link to={`/account/${id}`}>
          <button className="button transaction-button">View transactions</button>
        </Link>
      </div>
    </section>
  )
}
