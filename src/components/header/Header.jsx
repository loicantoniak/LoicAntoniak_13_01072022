import React from "react"
import { Link } from "react-router-dom"
import style from "./Header.module.scss"
import logo from "../../assets/images/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { logout, selectCurrentToken } from "../../redux/reducers/auth"

export default function Header() {
  const token = useSelector(selectCurrentToken)
  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(logout())
  }

  return (
    <nav className={style.nav}>
      <Link to="/">
        <img src={logo} alt="Argent Bank Logo" />
      </Link>
      <div>
        {token ? (
          <>
            <Link to="user" className={style.navItem}>
              <FontAwesomeIcon icon={faCircleUser} />
              Tony
            </Link>
            <Link to="/" className={style.navItem} onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="signin" className={style.navItem}>
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}
