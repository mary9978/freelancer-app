import { useState } from "react";
import { HiOutlineTrash, HiOutlinePencilAlt ,HiOutlineEye} from "react-icons/hi";
import convertText from "../../utils/convertText";
import toLocalDate from "../../utils/toLocalDate";
import convertToPersianNumber from "../../utils/convertPrice";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

function ProjectRow({ pr, index }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const {removeProject,isDeleting} = useRemoveProject();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{convertText(pr.title, 15)}</td>
      <td>{pr.category.title}</td>
      <td>{convertToPersianNumber(pr.budget)}</td>
      <td>{toLocalDate(pr.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {pr.tags.map((tag) => (
            <span key={tag} className="badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{pr.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={pr} />
      </td>
      <td>
        <div className="flex gap-x-2">
          <HiOutlineTrash
            onClick={() => setIsDelete(true)}
            className="w-5 h-5 bg-secondary-50 hover:cursor-pointer"
          />

          <Modal isOpen={isDelete} onClose={() => setIsDelete(false)} title={`حذف ${pr.title}`}>
            <ConfirmDelete 
            projectTitle={pr.title} 
            onClose={() => setIsDelete(false)}
            onConfirmDelete={()=>removeProject(pr._id,{
              onSuccess: ()=>setIsDelete(false)
            })}
            />
          </Modal>

          <HiOutlinePencilAlt
            onClick={() => setIsEdit(true)}
            className="w-5 h-5 bg-secondary-50 hover:cursor-pointer"
          />
          <Modal isOpen={isEdit} onClose={() => setIsEdit(false)} title={`ویرایش ${pr.title}`}>
             <CreateProjectForm 
             projectToEdit={pr}
              onClose={()=> setIsEdit(false)}/>
          </Modal>
        </div>
      </td>
      <td>
        <Link className="flex justify-center" to={`${pr._id}`}>
          <HiOutlineEye className="w-5 h-5"/>
        </Link>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
