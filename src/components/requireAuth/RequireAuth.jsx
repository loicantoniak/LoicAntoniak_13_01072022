import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { selectCurrentToken } from "../../redux/reducers/auth"

RequireAuth.propTypes = {
  children: PropTypes.element,
}

RequireAuth.defaultProps = {
  children: null,
}

export default function RequireAuth({ children }) {
  let token = useSelector(selectCurrentToken)
  let location = useLocation()

  if (!token) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  return children
}
