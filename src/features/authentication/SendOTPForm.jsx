import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import LoginImage2 from "../../assets/images/login-page2.png";
function SendOTPForm({ onSendOtpForm, isSending, register, errors }) {
  return (
    <div className="container-fluid container-style">
      <div className="max-w-screen-xl rounded-lg px-4 lg:px-0">
        <div className="form-grid bg-secondary-200">
          <div className="hidden lg:block bg-[#9DA0DC] rounded-lg">
            <img
              className="w-full object-none"
              src={LoginImage2}
              alt="login image"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex p-12 flex-col text-secondary-900  text-center">
              <p className="font-bYekan font-bold text-lg lg:text-3xl">
                خوش آمدید
              </p>

              <form
                onSubmit={onSendOtpForm}
                className="flex mt-4 flex-col my-4"
              >
                <TextField
                  className="input"
                  name={"phoneNumber"}
                  register={register}
                  labelText={"شماره موبایل خود را وارد کنید"}
                  type={"tel"}
                  errors={errors}
                  required={"true"}
                  validationSchema={{
                    required: {
                      value: true,
                      message: "شماره موبایل ضرروری می باشد",
                    },
                  }}
                />

                {isSending ? (
                  <Loading />
                ) : (
                  <button
                    type="submit"
                    onClick={onSendOtpForm}
                    className={
                      "gap-x-2 btn--primary w-full mt-4 text-bYekan"
                    }
                  >
                    ورود
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendOTPForm;
