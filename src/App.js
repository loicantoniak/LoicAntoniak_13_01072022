import React from "react"
import { Provider } from "react-redux"
import Navigation from "./pages/navigation"
import store from "./redux/store"
import { CookiesProvider } from "react-cookie"

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </CookiesProvider>
  )
}

export default App
