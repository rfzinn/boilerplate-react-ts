import { Notifykill } from '../Notifykill/Notifykill'
import { Status } from '../Status/Status'
import './Interface.css'

export function Interface() {

  return (
    <main>
      <Status />
      <Notifykill />
    </main>
  )
}