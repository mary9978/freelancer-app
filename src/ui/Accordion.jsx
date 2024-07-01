import { NavLink } from "react-router-dom";

export default function Accordion(props) {
  return (
    <div className="rounded-md mb-1 my-4">
      <NavLink
        to={props.path}
        className={`nav--link ${props.isMenuCollapse && 'justify-center rounded-none'}`}
      >
        <div className="flex items-center gap-x-3">
          {props.icon}
          {props.isMenuCollapse ? (
            ""
          ) : (
            <p className="font-PlusJakartaSans font-md">{props.title} </p>
          )}
        </div>
      </NavLink>
    </div>
  );
}
