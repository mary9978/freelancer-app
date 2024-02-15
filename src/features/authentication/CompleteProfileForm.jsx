import React, { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authServices";
import toast from "react-hot-toast";
function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { data, error, isPending,mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const completeFormHandler = async (e) => {
    e.preventDefault();
    try {
      const {message}= await mutateAsync({name,email,role});
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mx-auto md:h-screen">
      <div className="w-full sm:max-w-sm">
        <form onSubmit={completeFormHandler}>
          <TextField
            labelText={"نام و نام خانوادگی"}
            name={"name"}
            value={name}
            type={"text"}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            labelText={"ایمیل"}
            name={"email"}
            value={email}
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-center items-center gap-x-4 my-4">
            <RadioInput
              id={"OWNER"}
              name={"role"}
              label={"کارفرما"}
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              id={"FREELANCER"}
              name={"role"}
              label={"فریلنسر"}
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
            />
          </div>
          <button type="submit" className="w-full btn btn--primary mt-4">
            تایید
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
