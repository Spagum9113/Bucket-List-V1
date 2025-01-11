import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const appSettings = {
  databaseURL: "https://bucketlistv1-90bb7-default-rtdb.asia-southeast1.firebasedatabase.app/"
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <App />
)