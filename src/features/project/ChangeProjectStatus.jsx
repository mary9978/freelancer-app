import React from "react";
import RHFSelect from "../../ui/RHFSelect";
import { useForm } from "react-hook-form";
import useProposalStatus from "./useProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
function ChangeProjectStatus({ proposalId, onClose }) {
  const options = [
    {
      label: "رد شده",
      value: 0,
    },
    {
      label: "در انتظار تایید",
      value: 1,
    },
    {
      label: "تایید شده",
      value: 2,
    },
  ];
  const { register, handleSubmit } = useForm();
  const {toggleProposalStatus} = useProposalStatus();
  const queryClient = useQueryClient();
  const toggleHandler =(data)=>{
    toggleProposalStatus({
        id:proposalId,
        data
    },{
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:['project']
            })
            onClose();
        }
    })
  }
  return (
    <form onSubmit={handleSubmit(toggleHandler)}>
      <div>
        <RHFSelect
          label={"تغییر وضعیت"}
          name={"status"}
          options={options}
          register={register}
          
        />
        <button className="bg-blue-400 my-4 rounded-md p-2">تغییر وضعیت</button>
      </div>
    </form>
  );
}

export default ChangeProjectStatus;
