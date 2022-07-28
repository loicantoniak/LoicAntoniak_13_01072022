import React from "react"
import PropTypes from "prop-types"
import { Navigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

RequireAuth.propTypes = {
  children: PropTypes.element,
}

RequireAuth.defaultProps = {
  children: null,
}

export default function RequireAuth({ children }) {
  const token = useSelector((state) => state.auth.token)

  let location = useLocation()

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}
