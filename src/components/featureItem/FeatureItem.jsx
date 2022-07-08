import React from "react"
import PropTypes from "prop-types"
import style from "./FeatureItem.module.scss"

FeatureItem.propTypes = {
  icon: PropTypes.shape({
    icon: PropTypes.node,
    alt: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default function FeatureItem({ icon, title, text }) {
  return (
    <div className={style.container}>
      <img src={icon.icon} alt={icon.alt} className={style.icon} />
      <h3 className={style.title}>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
