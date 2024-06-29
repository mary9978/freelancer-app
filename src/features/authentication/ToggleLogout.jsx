import React from 'react'
import { MdLogout } from 'react-icons/md'
import useLogout from './useLogout'
import Loading from '../../ui/Loading';
function ToggleLogout() {
   const {isPending,logout} = useLogout();
   if(isPending) return <Loading/>
  return (
    <div>
         <MdLogout
          onClick={logout}
          className="w-5 h-5 text-gray-500 cursor-pointer"/>
    </div>
  )
}

export default ToggleLogout