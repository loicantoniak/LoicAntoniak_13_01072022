import React from "react"
import style from "./Header.module.scss"
import { Link } from "react-router-dom"
import { TOKEN_COOKIE } from "../../lib/variables"
import { useCookies } from "react-cookie"
// Redux
import { useDispatch, useSelector } from "react-redux"
import { logout as logoutAuth } from "../../redux/reducers/auth"
import { logout } from "../../redux/reducers/user"
// Icons
import logo from "../../assets/images/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  const userName = useSelector((state) => state.user.firstName)
  const [, removeCookie] = useCookies([TOKEN_COOKIE])
  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(logoutAuth())
    dispatch(logout())
    removeCookie(TOKEN_COOKIE)
  }

  return (
    <nav className={style.nav}>
      <Link to="/">
        <img src={logo} alt="Argent Bank Logo" />
      </Link>
      <div>
        {userName ? (
          <>
            <Link to="profile" className={style.navItem}>
              <FontAwesomeIcon icon={faCircleUser} />
              {userName}
            </Link>
            <Link to="/" className={style.navItem} onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="login" className={style.navItem}>
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}
