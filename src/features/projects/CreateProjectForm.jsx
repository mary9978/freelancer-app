import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import MultiDatePicker from "../../ui/MultiDatePicker";
import useCategories from "../../hooks/useCategory";
import useEditProject from './useEditProject';
import useCreateProject from "./useCreateProject";
function CreateProjectForm({onClose,projectToEdit={}}) {
  const {_id: editId,title,tags,deadline,description,category,budget} = projectToEdit;
  const [selectedTags, setTags] = useState(tags || []);
  const [date, setDate] = useState(new Date(deadline) || new Date());
  const { createProject } = useCreateProject();
   const {editProject} = useEditProject();
  const { categories } = useCategories();
  
  
  const isEditSection = Boolean(editId);
  let editValue = {};
  if(isEditSection){
    editValue = {
      title,
      description,
      category: category._id,
      budget
    }
  }
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({defaultValues:editValue});

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      tags: selectedTags,
      deadline: new Date(date).toISOString(),
    };
    if(isEditSection){
      editProject({
        id:editId,
        newProject
      },{
        onSuccess :()=>{
          reset();
          onClose();
        }
      })
    }
    else{
      createProject(newProject,{
        onSuccess :()=>{
          reset();
          onClose();
        }
      });
    }
   
  };
  return (
    <form
      className="flex flex-col py-4 space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        name={"title"}
        labelText={"عنوان پروژه"}
        errors={errors}
        register={register}
        required={"true"}
        validationSchema={{
          required: {
            value: true,
            message: "عنوان پروژه ضروری می باشد",
          },
          minLength: {
            value: 10,
            message: "عنوان پروژه حداقل 10 کاراکتر باشد",
          },
        }}
        type={"text"}
      />
      <TextField
        name={"description"}
        labelText={"توضیحات پروژه"}
        errors={errors}
        register={register}
        required={"true"}
        validationSchema={{
          required: {
            value: true,
            message: "توضیحات پروژه ضروری می باشد",
          },
          maxLength: {
            value: 60,
            message: "عنوان پروژه حداکثر 60 کاراکتر باشد",
          },
        }}
        type={"text"}
      />

      <TextField
        name={"budget"}
        labelText={"بودجه"}
        errors={errors}
        register={register}
        required={"true"}
        validationSchema={{
          required: {
            value: true,
            message: "بودجه پروژه ضروری می باشد",
          },
        }}
        type={"text"}
      />

      <RHFSelect
        options={categories}
        label={"دسته بندی"}
        name={"category"}
        register={register}
      />

      <TagsInput value={selectedTags} onChange={setTags} name="tags" />

      <MultiDatePicker date={date} setDate={setDate} />

      <button
        type="submit"
        className={"bg-blue-600 text-white  rounded-lg p-2"}
      >
        {editId ? 'ویرایش پروژه':'اضافه کردن پروژه'} 
      </button>
    </form>
  );
}

export default CreateProjectForm;
