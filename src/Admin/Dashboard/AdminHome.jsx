import AdminHome from "../AdminHome/AdminHome";
import DataStore from "../DataStore/DataStore";
import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { FaCriticalRole } from "react-icons/fa6";
import SKillTable from "../SkillUpdate/SkillUpdate";
import StickyHeadTable from "../RoleUpdate/RoleUpdate";
const Sidebar = () => {
  const [view, setView] = useState(0);
  return (
    <>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
        <div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
          <div class="flex items-center justify-center h-14 border-b font-extrabold">
            <div>Skill Quiz</div>
          </div>
          <div class="overflow-y-auto overflow-x-hidden flex-grow">
            <ul class="flex flex-col py-4 space-y-1">
              <li class="px-5">
                <div class="flex flex-row items-center h-8">
                  <div class="text-sm font-light tracking-wide text-gray-500">
                    Menu
                  </div>
                </div>
              </li>
              <li>
                <button
                  class="relative flex flex-row items-center h-11 w-[14.5rem] focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  onClick={() => setView(0)}
                >
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">Home</span>
                </button>
              </li>
              <li>
                <button
                  class="relative flex flex-row items-center h-11 focus:outline-none w-[14.5rem] hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  onClick={() => setView(1)}
                >
                  <span class="inline-flex justify-center items-center ml-4">
                    <IoAddCircleOutline className="w-5 h-5" />
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">
                    Add Question
                  </span>
                </button>
              </li>
              <li>
                <button
                  class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  onClick={() => setView(2)}
                >
                  <span class="inline-flex justify-center items-center ml-4">
                    <GiSkills className="w-5 h-5" />
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">
                    Update Skill Question
                  </span>
                </button>
              </li>
              <li>
                <button
                  class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  onClick={() => setView(3)}
                >
                  <span class="inline-flex justify-center items-center ml-4">
                    <FaCriticalRole className="w-5 h-5" />
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">
                    Update Role Question
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <main class="">
          {view === 0 ? (
            <AdminHome />
          ) : view === 1 ? (
            <DataStore />
          ) : view === 2 ? (
            <SKillTable />
          ) : (
            view === 3 && <StickyHeadTable />
          )}
        </main>
      </div>
    </>
  );
};

export default Sidebar;
