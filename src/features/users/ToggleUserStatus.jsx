import React from "react";
import Select from "../../ui/Select";
import RHFSelect from "../../ui/RHFSelect";
import { useForm } from "react-hook-form";
import useToggleUserStatus from "../admin/useToggleUserStatus";
import Loading from "../../ui/Loading";

function ToggleUserStatus({ userId }) {
  const { formState: error, register, handleSubmit } = useForm();
  const { isCreating, toggleProjectStatus } = useToggleUserStatus();
  const options = [
    {
      label: "رد کاربر",
      value: 0,
    },
    {
      label: "در انتظار تایید",
      value: 1,
    },
    {
      label: "تایید کاربر",
      value: 2,
    },
  ];
  const handleToggleStatus = (data) => {
    toggleProjectStatus({
     userId,
     data
    });
  };
  return (
    <form
      onSubmit={handleSubmit(handleToggleStatus)}
      className="my-4 space-y-4"
    >
      <RHFSelect
        label={""}
        name={"status"}
        register={register}
        options={options}
      />
      {isCreating ? (
        <Loading />
      ) : (
        <button type="submit" className="btn--primary">
          ثبت تغییرات
        </button>
      )}
    </form>
  );
}

export default ToggleUserStatus;
