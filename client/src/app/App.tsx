import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers";

import NavBar from "../components/App/NavBar/NavBar";

function App() {
  const path = window.location.pathname;

  const isLoginOrRegister = path === "/login" || path === "/register";

  return (
    <>
      {!isLoginOrRegister && <NavBar />}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}


export default App
