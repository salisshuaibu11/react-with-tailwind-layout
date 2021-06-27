import {useState} from "react";

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  BellIcon,
} from "@heroicons/react/outline";

import {
  ChevronDownIcon,
} from "@heroicons/react/solid";

import Salisu from "../assets/images/salisu.jpg";

function NavBar({ clicked, show }) {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setDropdown((prevState) => !prevState);
  };

  return (
    <header className="flex-shrink-1 border-b bg-white">
      <div className="flex items-center justify-between p-2">
        {/* Navbar Left */}
        <div className="flex items-center">
          <button
            onClick={clicked}
            className={`p-2 rounded-md focus:outline-none focus:ring`}
          >
            {show ? (
              <ChevronDoubleLeftIcon width={30} />
            ) : (
              <ChevronDoubleRightIcon width={30} />
            )}
          </button>
        </div>

        {/* Navbar Right */}
        <div className="relative divide-y-2 divide-gray-600 divide-solid w-28 flex items-center space-x-3">
          <div className="items-center space-x-3 flex">
            {/*Notification Button */}
            <div className="relative">
              <div className="absolute right-0 p-1 bg-red-400 rounded-full animate-ping"></div>
              <div className="absolute outline-none right-0 p-1 bg-red-400 border rounded-full"></div>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring">
                <BellIcon width={30} />
              </button>
            </div>

            {/* Avatar */}
            <div className="relative">
              <button onClick={handleDropdownToggle} className="p-1 outline-none bg-gray-200 rounded-full focus:outline-none focus:ring">
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src={Salisu}
                  alt="Salisu Shuaibu"
                />
                <ChevronDownIcon width={20} className="absolute -right-4 top-3"/>
              </button>
              {/* Green dots */}
              <div className="absolute right-0 p-1 bg-green-400 rounded-full bottom-3 animate-ping"></div>
              <div className="absolute right-0 p-1 bg-green-400 border border-white rounded-full bottom-3"></div>
            </div>
          </div>
          <div className={`absolute ${dropdown ? 'block' : 'hidden'} z-50 w-28 flex item-center h-14 bg-white top-12 -left-3`}>
            <button>Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
