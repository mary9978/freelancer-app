import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import useCreateProposals from "./useCreateProposals";
import Loading from '../../ui/Loading';
import { useNavigate } from "react-router-dom";

function CreateProposals({ onClose, projectId }) {
  const { isCreating, createProposal } = useCreateProposals();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const submitHandler = (data) => {
    const newData = {
      ...data,
      projectId,
    };
    createProposal(newData, {
      onSuccess: () => {
        onClose();
        reset(); 
        navigate("/auth");    
      },
    });
  };
  return (
    <form className="flex flex-col px-4"
     onSubmit={handleSubmit(submitHandler)}>
      <TextField
        labelText={"توضیحات"}
        name={"description"}
        type={"text"}
        register={register}
        errors={errors}
        required={"true"}
        validationSchema={{
          required: {
            value: true,
            message: " توضیحات ضروری است",
          },
        }}
      />
      <TextField
        labelText={"قیمت پیشنهادی"}
        name={"price"}
        type={"number"}
        register={register}
        errors={errors}
        required={"true"}
        validationSchema={{
          required: {
            value: true,
            message: " قیمت ضروری است",
          },
        }}
      />
      <TextField
        labelText={"مدت زمان"}
        name={"duration"}
        type={"number"}
        register={register}
        errors={errors}
        required={"true"}
        validationSchema={{
          required: {
            value: true,
            message: " زمان تحویل پروژه ضروری است",
          },
        }}
      />
      {isCreating ? <Loading />:<button 
      className="btn--primary mt-6 mb-4"
      type="submit">ارسال درخواست</button>}
      
    </form>
  );
}

export default CreateProposals;
