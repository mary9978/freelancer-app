import React from 'react'
import ProposalTable from '../features/Proposals/ProposalTable'

function Proposals() {
  return (
    <div>
      <h2 className="text-2xl font-PlusJakartaSans font-extrabold my-8">
        لیست پروپوزال های شما</h2>
        <ProposalTable/>
    </div>
  )
}

export default Proposals