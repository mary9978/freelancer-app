import React from "react";
import DropdownFilter from "../../../ui/DropdownFilter";
import useCategories from "../../../hooks/useCategory";
import Filter from "../../../ui/filter";
const statusOption=[
  {
    label:'همه',
    value:'ALL'
  },
  {
    label:'باز',
    value:'OPEN'
  },
  {
    label:'بسته',
    value:'CLOSED'
  },
];
const sortOption =[
  {
    label: "مرتب سازی (جدیدترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest",
  },
]
function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-between mt-4 mb-8">
      <h2 className="text-3xl font-bYekan text-secondary-500">لیست پروژه ها</h2>
      <div className="flex gap-x-2">
        <Filter options={statusOption} filterField={'status'}/>
        <DropdownFilter
          filterField={"category"}
          options={[
            {
              value: "All",
              label: "همه",
            },
            ...transformedCategories,
          ]}
        />
        <DropdownFilter
          filterField={"sort"}
          options={sortOption}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
