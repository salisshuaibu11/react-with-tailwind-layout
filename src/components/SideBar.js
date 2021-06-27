import { NavLink } from "react-router-dom";

import {
  TrendingUpIcon,
  ViewGridIcon,
  CreditCardIcon,
  XIcon
} from "@heroicons/react/outline";

// initial width = 64

function SideBar({ show, closed }) {
  return (
    <>
      <aside
        className={`fixed bg-white inset-y-0 z-50 flex flex-col flex-shrink-0 ${
          show ? "w-64" : "w-0"
        } max-h-screen overflow-hidden transition-all transform border-r shadow-lg lg:z-auto lg:static lg:shadow-none`}
      >
        <div className="flex items-center justify-between flex-shrink-0 p-2">
          <span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
            <span className="text-purple-500">Logo</span>
          </span>
          <XIcon width={20} className="lg:hidden block cursor-pointer" onClick={closed}/>
        </div>

        <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
          <ul className="p-2 space-y-5 overflow-hidden">
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="selected"
                className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
              >
                <span>
                  <ViewGridIcon width={25} />
                </span>
                <span className={`${show ? "block" : "hidden"}`}>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/reports"
                activeClassName="selected"
                className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
              >
                <span className="border p-2 rounded-full">
                  <TrendingUpIcon width={20} />
                </span>
                <span className={`${show ? "block" : "hidden"}`}>Reports</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/payment"
                activeClassName="selected"
                className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
              >
                <span>
                  <CreditCardIcon width={25} />
                </span>
                <span className={`${show ? "block" : "hidden"}`}>Payment</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default SideBar;
