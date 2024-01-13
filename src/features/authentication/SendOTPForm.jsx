import TextField from '../../ui/TextField';
import Loading from '../../ui/Loading';
import {MdArrowBack} from  'react-icons/md'
function SendOTPForm({onSendOtpForm ,isSending,phoneNumber, onChange }) {
  return (
    <>
      <div className='flex flex-row  justify-center items-center max-w-44'>
        <div className='basis-1/2 p-9'>
        <h2 className="font-vazir text-center text-lg font-bold  text-secondary-900">
    ورود | ثبت‌ نام
  </h2>
  <form onSubmit={onSendOtpForm}>
    <TextField
      labelText={"لطفا شماره موبایل خود را وارد کنید"}
      name={phoneNumber}
      value={phoneNumber}
      onChange={onChange}
      type={"tel"}
    />
    {isSending ? (
      <Loading />
    ) : (
      <button
        type="submit"
        onClick={() => console.log(phoneNumber)}
        className={"btn gap-x-2 btn--primary w-full my-3 flex justify-center items-center"}
      >
        ورود
        <MdArrowBack size={'18px'}/>
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
        <div className='basis-1/2'>
           <img src="/login2.png" alt="login image" />
        </div>
      </div>




      <div className="p-9 hidden">
  <h2 className="font-vazir text-lg font-bold text-right text-secondary-900">
    ورود | ثبت‌ نام
  </h2>
  <form onSubmit={onSendOtpForm}>
    <TextField
      labelText={"لطفا شماره موبایل خود را وارد کنید"}
      name={phoneNumber}
      value={phoneNumber}
      onChange={onChange}
      type={"tel"}
    />
    {isSending ? (
      <Loading />
    ) : (
      <button
        type="submit"
        onClick={() => console.log(phoneNumber)}
        className={"btn gap-x-2 btn--primary w-full my-3 flex justify-center items-center"}
      >
        ورود
        <MdArrowBack size={'18px'}/>
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
    </>

  );
}

export default SendOTPForm