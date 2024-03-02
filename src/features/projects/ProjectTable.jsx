import React from "react";
import { IoMdAdd } from "react-icons/io";
import useOwnerProjects from "./useOwnerProjects";
import UseUser from "../authentication/UseUser";
import Loading from "../../ui/Loading";

function ProjectTable() {
  // const { project, isLoading } = useOwnerProjects();
  // console.log(project);
  const project = [
    {
      _id: 1,
      title: "برنامه نویس ارشد ری اکت",
      category: "برنامه نویسی",
      budget: 103000000,
      deadline: "10/1/1403",
      tags: ["سئو", "طراحی سایت"],
      freelancer: "مریم رضایی",
      status: "OPEN",
    },
    {
      _id: 1,
      title: "برنامه نویس ارشد ری اکت",
      category: "برنامه نویسی",
      budget: 103000000,
      deadline: "10/1/1403",
      tags: ["سئو", "طراحی سایت"],
      freelancer: "مریم رضایی",
      status: "OPEN",
    },
    {
      _id: 1,
      title: "برنامه نویس ارشد ری اکت",
      category: "برنامه نویسی",
      budget: 103000000,
      deadline: "10/1/1403",
      tags: ["سئو", "طراحی سایت"],
      freelancer: "مریم رضایی",
      status: "OPEN",
    },

  ];
  // if (isLoading) return <Loading />;
  if (!project) return <h2>پروژه ای یافت نشد</h2>;
  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="text-2xl font-PlusJakartaSans font-extrabold">
          پروژه های شما
        </h2>
        <button className="btn btn--primary rounded-lg flex items-center gap-x-2">
          <IoMdAdd />
          ایجاد پروژه جدید
        </button>
      </div>


      <div className="relative overflow-x-auto p-8 bordr">
        <table className="table  w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">#</th>
              <th scope="col" className="px-6 py-3">عنوان پروژه</th>
              <th scope="col" className="px-6 py-3">دسته بندی</th>
              <th scope="col" className="px-6 py-3">بودجه</th>
              <th scope="col" className="px-6 py-3">ددلاین</th>
              <th scope="col" className="px-6 py-3">تگ ها</th>
              <th scope="col" className="px-6 py-3">فریلنسر</th>
              <th scope="col" className="px-6 py-3">وضعیت</th>
              <th scope="col" className="px-6 py-3">عملیات</th>
            </tr>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {project.map((pr, index) => {
              return (
                <tr className="px-6 py-4"  key={pr._id}>
                  <td>{index + 1}</td>
                  <td>{pr.title}</td>
                  <td>{pr.category}</td>
                  <td>{pr.budget}</td>
                  <td>{pr.deadline}</td>
                  <td>{pr.tags.join(" - ")}</td>
                  <td>{pr.freelancer?.name || "-"}</td>
                  <td>
                    {pr.status === "OPEN" ? (
                      <span>باز</span>
                    ) : (
                      <span>خاتمه یافته</span>
                    )}
                  </td>
                  <td>...</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectTable;
