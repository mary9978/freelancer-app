import React, { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authServices";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
function CompleteProfileForm() {
  const {register,handleSubmit,formState:{errors},getValues , watch} = useForm();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const { data, error, isPending,mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const completeFormHandler = async (data) => {
    try {
      const {user,message}= await mutateAsync(data);
      if(user.status !== 2){
        navigate("/");
        toast("پروفایل شما در انتظار تایید است",{icon:'👏'});
        return;
      }
      switch(user.role){
        case "OWNER":{
          navigate('/owner');
          break;
        }
        case "FREELANCER":{
          navigate('/freelancer');
          break;
        }
        default: return;
      }
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  };

  console.log('errors',errors);

  
  return (
    <div className="flex flex-col items-center justify-center mx-auto md:h-screen">
      <div className="w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(completeFormHandler)}>
          <TextField
            labelText={"نام و نام خانوادگی"}
            name={"name"}
            type={"text"}
            register={register}
            errors={errors}
           required={'true'}
           validationSchema={{
            required: {
              value: true,
              message: "نام و نام خانوادگی ضروری است",
            },
            minLength:{
              value:6,
              message:"حداقل باید 6 کاراکتر باشد "
            }
          }}

          />
          <TextField
            labelText={"ایمیل"}
            name={"email"}
            type={"email"}
            register={register}
            errors={errors}
           required={'true'}
           validationSchema={{
            required: {
              value: true,
              message: " ایمیل ضروری است",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نا معتبر است"
            }
          }}

          />
          <div className="flex justify-center items-center gap-x-4 my-4">
            <RadioInput
              value={"OWNER"}
              name={"role"}
              label={"کارفرما"}
              register={register}
              checked={watch('role') === "OWNER"}
              validationSchema={{
                required: {
                  value: true,
                  message: "انتخاب نقش ضروری است",
                }
              }}
            />
            <RadioInput
              value={"FREELANCER"}
              name={"role"}
              label={"فریلنسر"}
              register={register}
              checked={watch('role') === "FREELANCER"}
              validationSchema={{
                required: {
                  value: true,
                  message: "انتخاب نقش ضروری است",
                }
              }}
            />
            {errors && errors['role'] && <span className="text-red-500">{errors['role']?.message}</span>}
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
