import { useMutation } from '@tanstack/react-query';
import {useState,useEffect} from 'react'
import OtpInput from 'react-otp-input';
import { toast } from 'react-hot-toast';
import { checkOTP } from '../../services/authServices';
import { useNavigate } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
function CheckOTPForm({phoneNumber,onBack,resendOtpForm ,otpResponse}) {
  const [otp, setOtp] = useState('');
  const [time , setTime]=useState(5);
  const navigate = useNavigate();
  const { error, data, mutateAsync, isPending } = useMutation({
    mutationFn: checkOTP,
  });
  const checkOTPHandler = (e) => {
    e.preventDefault;
    try {
      const {user, message} = mutateAsync({ phoneNumber, otp });
      toast.success(message);
    }
    catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
  useEffect(() => {
    const timer = time > 0 && setInterval(()=>{
      setTime(t => t-1);
    },1000)
    return () => {
      if(timer) clearInterval(timer)
    }
  }, [time])
  
  return (
    <>
      <div className="mt-8">
        <button onClick={onBack}>
          بازگشت به صفحه قبل و ویرایش شماره تماس{" "}
        </button>
        <div>
          <p>{otpResponse ?.message }</p>
          <button onClick={onBack}>
          <CiEdit />
          </button>
        </div>
        <br/>
        {time>0 ? <p>{time} ثانیه تا ارسال مجدد کد</p> : 
        <button onClick={resendOtpForm}>ارسال مجدد کد تایید </button>}
        <h2 className="font-vazir font-medium text-secondary-900 my-3">
          کد ارسال شده را وارد کنید{" "}
        </h2>
        <form onSubmit={checkOTPHandler}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            containerStyle={"flex flex-row-reverse gap-x-2 items-center"}
            inputStyle={{
              width: "2.5rem",
              padding: "0.5rem 0.2rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
            }}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input type={"number"} {...props} />}
          />
          <button className="btn btn--primary w-full my-3">
            ارسال کد تایید{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default CheckOTPForm