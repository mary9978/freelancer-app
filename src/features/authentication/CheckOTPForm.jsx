import { useMutation } from '@tanstack/react-query';
import {useState,useEffect} from 'react'
import OtpInput from 'react-otp-input';
import { toast } from 'react-hot-toast';
import { checkOTP } from '../../services/authServices';
import { useNavigate ,Link} from 'react-router-dom';
function CheckOTPForm({phoneNumber,setStep}) {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const { error, data, mutateAsync, isPending } = useMutation({
    mutationFn: checkOTP,
  });
  const checkOTPHandler = (e) => {
    e.preventDefault;
    try {
      const {user, message} = mutateAsync({ phoneNumber, otp });
      //? else => push user to panel complete profile
      toast.success(message);
      if (user.isActive) {
        //? if user isActive push user to panel base on role
      }
      else {
        navigate('/complete-profile')
      }
    }
    catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
  const [minutes, setMinutes] = useState(1);
  const [second, setSeconds] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      if (second > 0) {
        setSeconds(second - 1);
      }
       if (second === 0) {
         if (minutes === 0) {
           clearInterval(interval);
         } else {
           setSeconds(59);
           setMinutes(minutes - 1);
         }
       }
    },1000)
    return () => {
        clearInterval(interval);
    }
  }, [second]);
  return (
    <>
      <div className="mt-8">
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
          {second > 0 || minutes > 0 ? (
            <p>
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {second < 10 ? `0${second}` : second}
            </p>
          ) : (
            <button onClick={setStep(1)}>ارسال دوباره کد تایید </button>
          )}

          <button className="btn btn--primary w-full my-3">
            ارسال کد تایید{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default CheckOTPForm