import React, { useState } from "react";
import DropDown from "./DropDown";
import UseUser from "../features/authentication/UseUser";
import useLogout from "../features/authentication/useLogout";
import useOutSideClick from "../hooks/useOutSideClick";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import userAvatar from "../assets/images/user-1.jpg";
import { Link } from "react-router-dom";

const userRole = {
  ADMIN: "ادمین",
  FREELANCER: "فریلنسر",
  OWNER: "کارفرما",
};
function UserInfo({ user }) {
  const [isOpenUserInfo, setOpenUserInfo] = useState(false);
  const { logout } = useLogout();
  const ref = useOutSideClick(() => setOpenUserInfo(false));
  return (
    <div className="relative" ref={ref}>
      <img
        onClick={() => setOpenUserInfo(true)}
        src={userAvatar}
        className="w-8 h-8 rounded-full icon"
        // alt={`${user.name} avatar`}
      />
      <DropDown isOpen={isOpenUserInfo}>
        <ul className="p-2">
          <li className="flex items-center gap-x-2 my-2">
            <img src={userAvatar} className="w-10 h-10 rounded-full" />
            <div>
            <p className="text-xs font-bYekan font-semibold">مریم رضایی</p>
              {/* <p className="text-xs font-bYekan font-semibold">{user.name}</p> */}
              <span className="text-xs text-green-500 font-bYekan font-semibold">
                {/* {userRole[user.role]} */}
              </span>
            </div>
          </li>
          <hr />
          <li>
            <Link className="flex ps-1 items-center gap-x-2 my-2" to={"/"}>
              <BsFillPatchQuestionFill className="icon w-4 h-4" />
              <p className="font-bYekan text-sm text-gray-500">سوالات متداول</p>
            </Link>
          </li>
          <li onClick={logout} className="flex items-center gap-x-2 my-2">
            <TbLogout className="icon w-5 h-5" />
            <p className="font-bYekan text-sm text-gray-500">خروج</p>
          </li>
        </ul>
      </DropDown>
    </div>
  );
}

export default UserInfo;
