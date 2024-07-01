import React, { useState } from "react";
import Table from "../../ui/Table";
import {CiEdit} from 'react-icons/ci'
import Modal from "../../ui/Modal";
import ToggleUserStatus from "./ToggleUserStatus";
const userRole={
    ADMIN:"ادمین",
    OWNER:"کارفرما",
    FREELANCER:"فریلنسر"
}
function UserRow({ user, index }) {
    const [isEdit,setIsEdit] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.phoneNumber}</td>
      <td>{userRole[user.role]}</td>
      <td>
        {user.status == 2 ? (
          <span className="text-success">کاربر فعال</span>
        ) : (
          <span className="text-yellow-700">در انتظار بررسی</span>
        )}
      </td>
      <td>
        <Modal
          isOpen={isEdit}
          onClose={()=>setIsEdit(false)}
          title={`ویرایش وضعیت کاربر ${user.name}`}
        >
            <ToggleUserStatus/>
        </Modal>
        <CiEdit 
        onClick={()=>setIsEdit(true)}
        className="w-5 h-5 cursor-pointer"/>
      </td>
    </Table.Row>
  );
}

export default UserRow;
