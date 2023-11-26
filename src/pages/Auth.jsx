import { useState } from 'react';
import CheckOTPForm from '../features/authentication/CheckOTPForm'
import SendOTPForm from '../features/authentication/SendOTPForm'

function Auth() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setphoneNumber] = useState("");
  const renderStep = () => {
    switch (step) {
      case 1: return <SendOTPForm setStep={setStep} phoneNumber={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}/>;
      case 2: return <CheckOTPForm setStep={setStep} phoneNumber={phoneNumber} />;
      default : return null
    }
  }
  return (
    <div className="flex flex-col justify-center items-center h--style">
      {renderStep()}
    </div>
  );
}

export default Auth