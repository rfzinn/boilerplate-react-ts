import { useEffect, useState } from "react"
import { Interface } from "./components/Interface/Interface"

export const App = () => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const eventListener = ({ data }: any) => {
      if (typeof data === 'boolean') {
        setToggle(true)
      }
    }

    window.addEventListener('message', eventListener)
    return () => window.removeEventListener('message', eventListener)
  }, [])

  useEffect(() => {
    const keyHandler = ({ key }: any) => {
      if (key === 'Escape') {
        setToggle(false)
      }
    }

    window.addEventListener('keydown', keyHandler)
    return () => window.removeEventListener('keydown', keyHandler)
  })

  return toggle && (
    <>
      <Interface />
    </>
  )
}