import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Privete = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
      <h1>Pagina Privada</h1>
      Olá {auth.user?.name}, tudo bem?
    </div>
  )
}