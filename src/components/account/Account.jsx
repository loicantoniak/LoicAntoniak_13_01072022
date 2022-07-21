import React from "react"
import PropTypes from "prop-types"
import style from "./Account.module.scss"

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default function Account({ title, amount, description }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })

  return (
    <section className={style.account}>
      <div className={style.contentWrapper}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.amount}>{formatter.format(amount)}</p>
        <p className={style.description}>{description}</p>
      </div>
      <div className={style.contentWrapper}>
        <button className="button transaction-button">View transactions</button>
      </div>
    </section>
  )
}
