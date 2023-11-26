import { useMutation } from '@tanstack/react-query';
import {useState} from 'react'
import OtpInput from 'react-otp-input';
import { toast } from 'react-hot-toast';
function CheckOTPForm({phoneNumber}) {
  const [otp, setOtp] = useState('');
  const {error,data,mutateAsync, isPending}= useMutation({

  })
  const checkOTPHandler = (e) => {
    e.preventDefault;
    try {
      const data = mutateAsync({phoneNumber:phoneNumber,otp:'3333333'})
    }
    catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
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
          <button className="btn btn--primary w-full my-3">
            ارسال کد تایید{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default CheckOTPForm