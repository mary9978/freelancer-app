import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-hot-toast";
import { checkOTP } from "../../services/authServices";
import { Link, useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Loading from "../../ui/Loading";
function CheckOTPForm({ phoneNumber, onBack, resendOtpForm, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(90);
  const navigate = useNavigate();
  const { error, data, mutateAsync, isPending } = useMutation({
    mutationFn: checkOTP,
  });
  const checkOTPHandler = async (e) => {
    e.preventDefault();
    console.log("otp");
    console.log("phone Number");
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      console.log("user", user);
      console.log("message", message);
      toast.success(message);
      if (user.isActive) {
        // redirect user based on role
        navigate("/owner");
      } else {
        navigate("/complete-profile");
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
    <>
      <section className=" dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex flex-row-reverse items-center justify-center">
            <h2 className="text-2xl font-PlusJakartaSans font-bold text-secondary-900 ms-8">
              کارا - کاریابی آنلاین
            </h2>
            <div className="w-8 h-8 border border-gray-300 rounded-xl hover:bg-gray-100 hover:cursor-pointer">
              <HiMiniArrowSmallRight
                onClick={onBack}
                size={30}
                className={"hover:text-primary-200"}
              />
            </div>
          </div>
          {otpResponse && (
            <div className="flex flex-row items-center justify-center mt-6">
              <h6 className="font-vazir text-normal text-secondary-400">
                کد تایید برای شماره موبایل {phoneNumber} ارسال گردید
              </h6>
              <CiEdit
                onClick={onBack}
                size={20}
                className={"ms-2 hover:cursor-pointer hover:text-primary-400"}
              />
            </div>
          )}

          <form className="my-12" onSubmit={checkOTPHandler}>
            <h2 className="font-vazir font-medium text-secondary-900 my-3">
              کد تایید را وارد کنید
            </h2>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              containerStyle={"flex flex-row-reverse gap-x-2 items-center my-8"}
              inputStyle={{
                width: "2.5rem",
                padding: "0.5rem 0.2rem",
                border: "1px solid #ccc",
                borderRadius: "0.5rem",
              }}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input type={"number"} {...props} />}
            />
            <div className="font-vazir text-normal text-secondary-600">
              {time > 0 ? (
                `ارسال مجدد  کد تا ${time} ثانیه دیگر`
              ) : (
                <button onClick={resendOtpForm}>دریافت مجدد کد</button>
              )}
            </div>
            {isPending ? (
              <Loading />
            ) : (
              <button
                type="submit"
                id="btn-resend"
                className="btn btn--primary  w-full my-8 disabled:bg-pink-500"
              >
                ارسال کد تایید{" "}
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default CheckOTPForm;
