import React, { useState } from "react";
import Table from "../../../ui/Table";
import convertText from "../../../utils/convertText";
import convertToPersianNumber from "../../../utils/convertPrice";
import toLocalDate from "../../../utils/toLocalDate";
import { MdAssignmentAdd } from "react-icons/md";
import {
  HiOutlineTrash,
  HiOutlinePencilAlt,
  HiOutlineEye,
} from "react-icons/hi";
import Modal from "../../../ui/Modal";
import CreateProposals from "../../Proposals/createProposals";
function ProjectsRow({ projects, index }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{convertText(projects.title, 15)}</td>
      <td>{convertToPersianNumber(projects.budget)}</td>
      <td>{toLocalDate(projects.deadline)}</td>
      <td>
        {projects.status == "OPEN" ? (
          <span className="text-success">باز</span>
        ) : (
          <span className="text-error">خاتمه یافته</span>
        )}
      </td>
      <td>
        <MdAssignmentAdd
          onClick={() => setIsOpenModal(true)}
          className="w-5 h-5 text-gray-700 cursor-pointer"
        />

        <Modal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          title={`ارسال درخواست برای پروژه " ${projects.title} "`}
        >
          <CreateProposals 
          projectId={projects._id}
           onClose={() => setIsOpenModal(false)}/>
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectsRow;
