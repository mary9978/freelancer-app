import React, { useState } from "react";
import Table from "../../ui/Table";
import convertText from "../../utils/convertText";
import convertToPersianNumber from "../../utils/convertPrice";
import Modal from "../../ui/Modal";
import {MdEdit} from 'react-icons/md'
import RHFSelect from "../../ui/RHFSelect";
import { useForm } from "react-hook-form";
import ChangeProjectStatus from "./ChangeProjectStatus";
const statusStyle =[
    {
        id:1,
        label:'رد شده',
        className:'bg-red-600'
    },
    {
        id:2,
        label:'در انتظار تایید',
        className:'bg-yellow-300'
    },
    {
        id:1,
        label:'تایید شده',
        className:'bg-green-500'
    },
]
function ProposalRow({ pro, index }) {
    const [open,setIsOpen] = useState(false);
   
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{pro.user.name}</td>
      <td>{convertText(pro.description)}</td>
      <td>{pro.duration} روز</td>
      <td>{convertToPersianNumber(pro.price)} تومان</td>
      <td>
       <p className={`text-center ${statusStyle[pro.status].className}`}>
        {statusStyle[pro.status].label}
       </p>
      </td>
      <td>
      <MdEdit onClick={()=>setIsOpen(true)}/>
        <Modal
         onClose={()=> setIsOpen(false)}
         isOpen={open}
         title={'تغییر وضعیت درخواست'}
         >
        <ChangeProjectStatus
         proposalId={pro._id} 
         onClose={()=>setIsOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
