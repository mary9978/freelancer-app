import React from 'react'
import useProposals from '../Proposals/useProposals'
import Loading from '../../ui/Loading';
import Stat from './Stat';
import {CiGrid41} from 'react-icons/ci';
function Stats() {
 const {proposals,isLoading} = useProposals();
  if(isLoading) return <Loading/>
  return (
    <div div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 xl:grid-cols-3">
      <Stat 
      title={'پروژه ها'}
       value={proposals.length}
       icon={<CiGrid41 className="w-10 h-10 text-secondary-500" />}
       />
    </div>
  )
}

export default Stats