import CheckOTPForm from '../features/authentication/CheckOTPForm'
import SendOTPForm from '../features/authentication/SendOTPForm'

function Auth() {
  return (
    <div className="flex flex-col justify-center items-center h--style">
      <SendOTPForm/>
      <CheckOTPForm />
    </div>
  );
}

export default Auth