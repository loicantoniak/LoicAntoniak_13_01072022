import React from "react"
import style from "./Header.module.scss"
import { Link } from "react-router-dom"
// Redux
import { useDispatch, useSelector } from "react-redux"
import { logout as logoutAuth } from "../../redux/reducers/auth"
// Icons
import logo from "../../assets/images/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { logout } from "../../redux/reducers/user"

export default function Header() {
  const userName = useSelector((state) => state.user.firstName)
  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(logoutAuth())
    dispatch(logout())
  }

  return (
    <nav className={style.nav}>
      <Link to="/">
        <img src={logo} alt="Argent Bank Logo" />
      </Link>
      <div>
        {userName ? (
          <>
            <Link to="user" className={style.navItem}>
              <FontAwesomeIcon icon={faCircleUser} />
              {userName}
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
