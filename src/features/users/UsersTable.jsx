import React from "react";
import useUser from "../admin/useUser";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import UserRow from "./UserRow";

function UsersTable() {
  const { data, isLoading } = useUser();
  const { users } = data || {};
  console.log(users);
  if (isLoading) return <Loading />;
  if (!users) return <h2>کاربری یافت نشد</h2>;
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-PlusJakartaSans font-extrabold my-4">
        لیست کاربران
      </h2>
      <Table>
        <Table.Header>
          <th scope="col" className="p-4">
            #
          </th>
          <th scope="col" className="p-4">
             نام و نام خانوادگی
          </th>
          <th scope="col" className="p-4">
             شماره تماس
          </th>
          <th scope="col" className="p-4">
            دسترسی
          </th>
          <th scope="col" className="p-4">
            وضعیت کاربر
          </th>
          <th scope="col" className="p-4">
            عملیات
          </th>
        </Table.Header>
        <Table.Body>
            {users.map((user,index) => <UserRow user={user} index={index} key={index}/>)}
        </Table.Body>
      </Table> 
    </div>
  );
}

export default UsersTable;
