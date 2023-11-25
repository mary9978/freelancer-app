import {useState} from 'react'
import TextField from '../../ui/TextField';

function SendOTPForm() {
  const [phoneNumber,setphoneNumber]= useState("");
  const onChangeHadndler =(e)=>{
   setphoneNumber(e.target.value);
  }
  const sendOTPForm = (e) => {
    e.preventDefault();
    
  }
  return (
    <div className="border border-secondary-500 rounded-lg p-9">
      <h2 className="font-vazir text-lg font-bold text-right text-secondary-900">
        ورود | ثبت‌نام
      </h2>
      <form onSubmit={sendOTPForm}>
        <TextField
          labelText={"لطفا شماره موبایل خود را وارد کنید"}
          name={phoneNumber}
          value={phoneNumber}
          onChange={onChangeHadndler}
          type={"tel"}
        />
        <button
          type='submit'
          onClick={() => console.log(phoneNumber)}
          className={"btn btn--primary w-full my-3"}
        >
          ورود
        </button>
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