import { MdSearch, MdNotifications } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import UseUser from "../features/authentication/UseUser";
function Header() {
  // const {data} = UseUser();
  // console.log(data);
  return (
    <div className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-8  dark:bg-gray-800 dark:border-gray-700">
    <nav className="flex basis-full items-center justify-between w-full mx-auto px-4 sm:px-6 md:px-8">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4 ">
          <MdSearch fontSize={20} color="gray-200" />
        </div>

        <input
          className='class="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"'
          type="text"
          placeholder="جست و جو"
        />
      </div>
      <div className="flex gap-x-4">
        <MdNotifications fontSize={24} />
        <FaUser fontSize={20} />
      </div>
    </nav>
  </div>
  )
}

export default Header