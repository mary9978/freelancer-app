import React from 'react'
import Table from '../../ui/Table'
import ProposalRow from './ProposalRow'

function ProposalTable({project}) {
    console.log(project);
  if(!project.proposals.length) return <p>درخواستی برای این پروژه موجود نمی باشد</p>
  return (
    <Table>
         <Table.Header>
          <th scope="col" className="p-4">
            #
          </th>
          <th scope="col" className="p-4">
             فریلنسر
          </th>
          <th scope="col" className="p-4">
             توضیحات
          </th>
          <th scope="col" className="p-4">
            زمان تحویل
          </th>
          <th scope="col" className="p-4">
            هزینه
          </th>
          <th scope="col" className="p-4">
             وضعیت درخواست
          </th>
          <th scope="col" className="p-4 cursor-pointer">
            عملیات
          </th>
        </Table.Header>
        <Table.Body>
          {project.proposals.map((pro,index) =>{
            return(
                <ProposalRow pro={pro} index={index}/>
            )
          })}
        </Table.Body>
    </Table>
  )
}

export default ProposalTable