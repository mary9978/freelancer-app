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
      containerStyle={"flex flex-row row-reverse"}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input type={'number'} {...props} />}
    />
    </>
  )
}

export default CheckOTPForm