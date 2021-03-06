import React from "react"
import { Provider } from "react-redux"
import Navigation from "./pages/navigation"
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
