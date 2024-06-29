import React, { useState } from "react";
import {  Switch } from "@headlessui/react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from '../../ui/Loading';
function ToggleProjectStatus({ project }) {
  const [enabled, setEnabled] = useState(
    project.status === "OPEN" ? true : false
  );
  const { toggleProject, isUpdating } = useToggleProjectStatus();
  const handleToggle = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProject(
      {
        id: project._id,
        data: { status },
      },
      {
        onSuccess: () => {
          setEnabled(!enabled);
        },
      }
    );
  };
  return (
    <div className="flex items-center justify-center py-16 w-[5rem]">
      {isUpdating ? (
        <Loading width={20} height="50"/>
      ) : (
        <Switch.Group>
          <Switch.Label>
            {project.status === "OPEN" ? "باز" : "بسته"}
          </Switch.Label>
          <Switch
            checked={enabled}
            onChange={handleToggle}
            className={`${enabled ? "bg-blue-700" : "bg-gray-200"}
        relative inline-flex h-[30px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "-translate-x-6" : "translate-x-0"}
          pointer-events-none inline-block 
          h-[24px] w-[24px] transform rounded-full
           bg-white shadow-lg ring-4 transition 
           duration-200 ease-in-out`}
            />
          </Switch>
        </Switch.Group>
      )}
    </div>
  );
}

export default ToggleProjectStatus;
