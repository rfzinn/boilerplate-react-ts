import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Privete } from "./pages/Privete/Privete";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { useContext } from "react";
import { AuthContext } from "./contexts/Auth/AuthContext";

export function App() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.signout()
    navigate('/')
  }

  return (
    <div className="app">
      <header>
        <h1>Header do  site</h1>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/Private'}>Pagina Privada</Link>
          {auth.user && <button onClick={handleLogout}>sair</button>}
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Private" element={<RequireAuth><Privete /></RequireAuth>} />
        </Routes>
      </header>
    </div>
  )
}