import React , {useState,useEffect} from 'react'
import SendOTPForm from './SendOTPForm';
import CheckOTPForm from './CheckOTPForm';
import { getOTP } from '../../services/authServices';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
function AuthContainer() {
    const [step, setStep] = useState(1);
    const [phoneNumber, setphoneNumber] = useState("");
    const { data : otpResponse, error, isPending :isSending, mutateAsync } = useMutation({
       mutationFn: getOTP,
    });
    const sendOTPForm = async (e) => {
      e.preventDefault();
      console.log('phoneNumber',phoneNumber);
      try {
        const data = await mutateAsync({ phoneNumber });
        toast.success(data.message);
         setStep(2); 
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
  
    };
    const renderStep = () => {   
        switch (step) {
          case 1: 
            return <SendOTPForm onSendOtpForm ={sendOTPForm} setphoneNumber={setphoneNumber}  phoneNumber={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}/>;
          case 2:
             return <CheckOTPForm setStep={setStep} otpResponse={otpResponse} resendOtpForm={sendOTPForm} onBack={()=> setStep(1)} phoneNumber={phoneNumber} />;
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