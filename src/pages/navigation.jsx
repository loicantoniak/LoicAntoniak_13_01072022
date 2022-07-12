import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
// Components
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
// Pages
import Home from "./home"
import NoMatch from "./noMatch"
import SignIn from "./signIn"
import User from "./user"
import RequireAuth from "../components/requireAuth/RequireAuth"

export default function Navigation() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/user"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
