import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const handleBack = () => {
    return navigate(-1,{replace:true});
  };
  return (
    <div className="flex bg-secondary-0 justify-center items-center h-screen">
      <div className="w-full flex items-center flex-col max-w-screen-sm">
        <img
          className={'px-4'}
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
        />
        <h2 className="text-lg lg:text-2xl font-vazir text-secondary-900 my-8 text-center font-bold">
          صفحه مورد نظر یافت نشد
        </h2>
        <button
          onClick={handleBack}
          className="btn btn--primary w-1/2"
        >
          بازگشت به صفحه قبلی
        </button>
      </div>
    </div>
  );
}

export default NotFound;
