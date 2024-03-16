import React from "react";
import { IoMdAdd } from "react-icons/io";
import useOwnerProjects from "./useOwnerProjects";
import UseUser from "../authentication/UseUser";
import Loading from "../../ui/Loading";
import convertText from "../../utils/convertText";
import toLocalDate from "../../utils/toLocalDate";
import convertToPersianNumber from '../../utils/convertPrice';

function ProjectTable() {
  //  const { project, isLoading } = useOwnerProjects();
  // console.log(project);
  const project = [
    {
      _id: 1,
      title: "برنامه نویس ارشد ری اکت",
      category: "برنامه نویسی",
      budget: 203000,
      deadline: '2023-03-16T10:53:30.392Z',
      tags: ["سئو", "طراحی سایت"],
      freelancer: "مریم رضایی",
      status: "OPEN",
    },
    {
      _id: 1,
      title: "برنامه نویس ارشد ری اکت",
      category: "برنامه نویسی",
      budget: 2000000,
      deadline: '2024-03-16T10:53:30.392Z',
      tags: ["سئو", "طراحی سایت"],
      freelancer: "مریم رضایی",
      status: "OPEN",
    },
    {
      _id: 1,
      title: "برنامه نویس ارشد ری اکت",
      category: "برنامه نویسی",
      budget: 103000000,
      deadline: '2024-03-16T10:53:30.392Z',
      tags: ["سئو", "طراحی سایت"],
      freelancer: "مریم رضایی",
      status: "Close",
    },
  ];
  //  if (isLoading) return <Loading />;
  if (!project) return <h2>پروژه ای یافت نشد</h2>;
  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="text-2xl font-PlusJakartaSans font-extrabold">
          پروژه های شما
        </h2>
        <button className="btn btn--primary rounded-lg flex items-center">
          <IoMdAdd />
          ایجاد پروژه جدید
        </button>
      </div>
      <div className="overflow-x-auto p-8 bg-secondary-0">
        <table>
          <thead className="text-base text-gray-500">
            <tr className="title-row">
              <th scope="col" className="p-4">
                #
              </th>
              <th scope="col" className="p-4">
                عنوان پروژه
              </th>
              <th scope="col" className="p-4">
                دسته بندی
              </th>
              <th scope="col" className="p-4">
                بودجه
              </th>
              <th scope="col" className="p-4">
                ددلاین
              </th>
              <th scope="col" className="p-4">
                تگ ها
              </th>
              <th scope="col" className="p-4">
                فریلنسر
              </th>
              <th scope="col" className="p-4">
                وضعیت
              </th>
              <th scope="col" className="p-4">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {project.map((pr, index) => {
              return (
                <tr key={pr._id}>
                  <td>{index + 1}</td>
                  <td>{convertText(pr.title,15)}</td>
                  <td>{pr.category.title}</td>
                  <td>{convertToPersianNumber(pr.budget)}</td>
                  <td>{toLocalDate(pr.deadline)}</td>
                  <td>
                    <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                      {pr.tags.map((tag) => (
                        <span className="badge--secondary">{tag}</span>
                      ))}
                    </div>
                  </td>
                  <td>{pr.freelancer?.name || "-"}</td>
                  <td>
                    {pr.status === "OPEN" ? (
                      <span className="badge-success">باز</span>
                    ) : (
                      <span className="badge-danger">بسته</span>
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
