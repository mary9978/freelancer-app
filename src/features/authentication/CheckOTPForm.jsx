import React,{useState} from 'react'
import OtpInput from 'react-otp-input';
function CheckOTPForm() {
    const [otp, setOtp] = useState('');
  return (
    <>
      <h2 className='font-vazir font-medium text-secondary-900'>کد ارسال شده را وارد کنید </h2>
      <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      containerStyle={"flex flex-row-reverse gap-x-2 items-center"}
      inputStyle={{
        width:"2.5rem",
        padding:"0.5rem 0.2rem",
        border:"1px solid #ccc",
        borderRadius:"0.5rem"
      }}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input type={'number'} {...props} />}
    />
    </>
  )
}

export default CheckOTPForm