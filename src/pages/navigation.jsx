import React, { useEffect } from "react"
import { Routes, Route, HashRouter } from "react-router-dom";
import { useCookies } from "react-cookie"
import backend from "../services/backend"
import { TOKEN_COOKIE } from "../lib/variables"
// Redux
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../redux/reducers/user"
import { setCredentials } from "../redux/reducers/auth"
// Components
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
// Pages
import Home from "./home"
import NoMatch from "./noMatch"
import SignIn from "./signIn"
import User from "./user"
import RequireAuth from "../components/requireAuth/RequireAuth"
import Account from "./account"

export default function Navigation() {
  const token = useSelector((state) => state.auth.token)
  const [cookies] = useCookies([TOKEN_COOKIE])
  const dispatch = useDispatch()

  // If there is an argentBankToken's cookie, fetch and update user
  useEffect(() => {
    if (!token && cookies[TOKEN_COOKIE] && cookies[TOKEN_COOKIE] != "undefined") {
      dispatch(setCredentials(cookies[TOKEN_COOKIE]))
      backend.user
        .getUser(cookies[TOKEN_COOKIE])
        .then((res) => dispatch(setUser(res.data.body)))
        .catch((err) => console.error(err))
    }
  }, [])

  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />

        <Route
          path="/account/:accountId"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
