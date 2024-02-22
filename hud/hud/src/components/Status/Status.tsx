import { IoSkullOutline, IoTimeOutline } from 'react-icons/io5'
import './Status.css'
import { PiUsersThreeBold } from 'react-icons/pi'

export function Status() {

  return (
    <div className='main-status'>
      <div className='status'>
        <IoSkullOutline />
        <h1>8</h1>
        <h1>|</h1>
        <IoTimeOutline />
        <h1>22:08</h1>
        <h1>|</h1>
        <PiUsersThreeBold />
        <h1>5/80</h1>
      </div>
    </div>
  )
}