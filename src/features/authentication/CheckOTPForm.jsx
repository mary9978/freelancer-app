import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-hot-toast";
import { checkOTP } from "../../services/authServices";
import { Link, useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Loading from "../../ui/Loading";
import { useDarkMode } from "../../context/DarkModeContext";
function CheckOTPForm({ phoneNumber, onBack, resendOtpForm, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(90);
  const navigate = useNavigate();
  const {isDarkMode} = useDarkMode();
  const { error, data, mutateAsync, isPending } = useMutation({
    mutationFn: checkOTP,
  });
  const checkOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if(!user.isActive) return navigate("/complete-profile");
      if(user.status !== 2){
        navigate("/");
        toast.info("پروفایل شما در انتظار تایید است");
        return;
      }
      switch(user.role){
        case "OWNER":{
           alert('owner');
          navigate('/owner');
          break;
        }
        case "FREELANCER":{
           alert('Freelancer');
          navigate('/freelancer');
          break;
        }
        case "ADMIN":{
           alert('ADMIN');
          navigate('/admin');
          break;
        }
        default: return;
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="container h-screen sm:max-w-sm overflow-hidden md:max-w-screen-lg px-8 justify-center items-center flex">
          {otpResponse && (
            <div className="flex flex-row items-center justify-center mt-6">
              <h6 className="font-bYekan text-normal text-center md:text-right text-secondary-500">
                کد تایید برای شماره موبایل {phoneNumber} ارسال گردید
              </h6>
              <CiEdit
                onClick={onBack}
                size={20}
                className={"ms-2 hover:cursor-pointer hover:text-primary-400"}
              />
            </div>
          )}

          <form className="container-style2" onSubmit={checkOTPHandler}>
               <div className="w-8 h-8 border flex justify-center items-center bg-secondary-300 border-gray-300 rounded-xl hover:bg-secondary-400 hover:cursor-pointer">
              <HiMiniArrowSmallRight
                onClick={onBack}
                size={30}
                className={"text-secondary-500 hover:text-primary-200"}
              />
            </div>
            <h2 className="font-bYekan text-center md:text-right text-xl font-medium text-secondary-400 ps-6 md:ps-0 my-3">
              کد تایید را وارد کنید
            </h2>
            <OtpInput
              shouldAutoFocus ={true}
              value={otp}
              onChange={setOtp}
              numInputs={6}
              containerStyle="flex flex-row-reverse gap-x-2  justify-center"
              inputStyle={{
                width: "2.5rem",
                padding: "0.5rem 0.2rem",
                border: "1px solid rgb(var(--color-primary-900))",
                borderRadius: "0.5rem",
                backgroundColor: "transparent",
                color: "rgb(var(--color-secondary-700))",
              }}
              // inputStyle={{
              //   width: "2.5rem",
              //   backgroundColor:`${isDarkMode ? '#29334E':'#F7F7F9'}`,
              //   padding: "0.5rem 0.2rem",
              //   border: "1px solid #ccc",
              //   borderRadius: "0.5rem",
              // }}
              renderSeparator={<span className={'text-secondary-400'}>-</span>}
              renderInput={(props) => <input type={"number"} {...props} />}
            />
            <div className="font-vazir text-normal text-secondary-600">
              {time > 0 ? (
                `ارسال مجدد  کد تا ${time} ثانیه دیگر`
              ) : (
                <button className={'font-bYekan text-white cursor-pointer'} onClick={resendOtpForm}>دریافت مجدد کد</button>
              )}
            </div>
            {isPending ? (
              <Loading />
            ) : (
              <button
                type="submit"
                className="btn--primary text-bYekan w-full my-6"
              >
                ارسال کد تایید{" "}
              </button>
            )}
          </form>
     {/* </div> */}
    </div>
  );
}

export default CheckOTPForm;
