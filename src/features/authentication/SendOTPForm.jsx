import {useState} from 'react'
import TextField from '../../ui/TextField';
import { useMutation } from '@tanstack/react-query';
import { getOTP } from '../../services/authServices';
import { toast } from 'react-hot-toast';
import Loading from '../../ui/Loading';
function SendOTPForm({ setStep,phoneNumber, onChange }) {
  //? useQuery => for get data
 //? useMutation => method post , delete , put , ...(send data)

  const { data, error, isPending, mutateAsync } = useMutation({
    //mutationFn : ba che method mikhay send koni info haro
    mutationFn: getOTP,
  });
  const sendOTPForm = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
      console.log(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }

  };
  //? useQuery => get
  //? useMutation => post , put , delete
  return (
    <div className="border border-secondary-500 rounded-lg p-9">
      <h2 className="font-vazir text-lg font-bold text-right text-secondary-900">
        ورود | ثبت‌ نام
      </h2>
      <form onSubmit={sendOTPForm}>
        <TextField
          labelText={"لطفا شماره موبایل خود را وارد کنید"}
          name={phoneNumber}
          value={phoneNumber}
          onChange={onChange}
          type={"tel"}
        />
        {isPending ? (
          <Loading />
        ) : (
          <button
            type="submit"
            onClick={() => console.log(phoneNumber)}
            className={"btn btn--primary w-full my-3"}
          >
            ورود
          </button>
        )}
      </form>
      <p
        className={
          "font-vazir text-sm font-normal text-right text-secondary-400"
        }
      >
        ورود شما به معنای پذیرش شرایط و قوانین حریم‌ خصوصی است
      </p>
    </div>
  );
}

export default SendOTPForm