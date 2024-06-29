import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ProjectRow from "./ProjectRow";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";

function ProjectTable() {
  const [createPro,setCreatePro] = useState(false);
  const {isLoading,projects} = useOwnerProjects();
   if (isLoading) return <Loading />;
  if (!projects) return <h2>پروژه ای یافت نشد</h2>;
  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="text-2xl font-PlusJakartaSans font-extrabold">
          پروژه های شما
        </h2>
        <button 
        onClick={()=> setCreatePro(true)}
        className="btn btn--primary rounded-lg flex items-center">
          <IoMdAdd />
          ایجاد پروژه جدید
        </button>
        {/* create project moadal */}
        <Modal 
         isOpen={createPro}
         onClose={()=>setCreatePro(false)}
         title={'ایجاد پروژه جدید'}
         >
          <CreateProjectForm onClose={()=>setCreatePro(false)}/>
         </Modal>
      </div>

      <Table>
        <Table.Header>
          <th scope="col" className="p-4">
            #
          </th>
          <th scope="col" className="p-4">
            عنوان پروژه
          </th>
          <th scope="col" className="p-4">
            دسته بندی
          </th>
          <th scope="col" className="p-4">
            بودجه
          </th>
          <th scope="col" className="p-4">
            ددلاین
          </th>
          <th scope="col" className="p-4">
            تگ ها
          </th>
          <th scope="col" className="p-4">
            فریلنسر
          </th>
          <th scope="col" className="p-4">
            وضعیت
          </th>
          <th scope="col" className="p-4">
            عملیات
          </th>
          <th scope="col" className="p-4">
            درخواست ها
          </th>
        </Table.Header>
        <Table.Body>
          {projects.map((pr, index) => {
            return <ProjectRow key={index} index={index} pr={pr} />;
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProjectTable;
