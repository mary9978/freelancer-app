import React , {useState,useEffect} from 'react'
import SendOTPForm from './SendOTPForm';
import CheckOTPForm from './CheckOTPForm';
import { getOTP } from '../../services/authServices';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
function AuthContainer() {
    const [step, setStep] = useState(1);
    // const [phoneNumber, setphoneNumber] = useState("");
    const { 
      register,
      handleSubmit,
      formState: { errors },
      getValues
    } = useForm();
    const { data : otpResponse, error, isPending :isSending, mutateAsync } = useMutation({
       mutationFn: getOTP,
    });
    const sendOTPForm = async (data) => {
      try {
        const res = await mutateAsync(data);
        toast.success(res.message);
         setStep(2); 
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
  
    };
    const renderStep = () => {   
        switch (step) {
          case 1: 
            return <SendOTPForm onSendOtpForm ={handleSubmit(sendOTPForm)}  register={register} errors={errors}/>;
          case 2:
             return <CheckOTPForm setStep={setStep} otpResponse={otpResponse} resendOtpForm={sendOTPForm} onBack={()=> setStep(1)} phoneNumber={getValues('phoneNumber')} />;
          default : return null;
        }
    }
  return (
    <>
     {renderStep()}
    </>
  )
}

export default AuthContainer