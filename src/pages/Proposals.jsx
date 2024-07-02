import React from 'react'
import ProposalTable from '../features/Proposals/ProposalTable'

function Proposals() {
  return (
    <div>
      <h2 className="text-2xl font-bYekan font-extrabold text-secondary-500 my-8">
         لیست پروپوزال ها </h2>
        <ProposalTable/>
    </div>
  )
}

export default Proposals