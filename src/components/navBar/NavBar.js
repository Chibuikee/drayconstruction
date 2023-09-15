"use client";
import React from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import { ADdata, navdatajson } from "./navdata";
import Link from "next/link";
import NavBarr from "./navigattion";
import NavSubFolders from "./NavSubFolders";

function NavBar() {
  const [navBarToggle, setNavBarToggle] = useState(true);

  return (
    <nav className="relative">
      <div className="p-[6px] bg-[#f4f4f4] hidden lg:block">
        <ul className="flex justify-between ml-[150px] ">
          {ADdata.map((item) => (
            <li
              key={item.name}
              className={`${
                item.name == "SEARCH" ? "text-[red]" : "text-[#282828]"
              }] text-[.75rem]`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-[27px] flex justify-between mr-7 xxxs:mr-12 relative items-center">
        {/* <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          className="w-[140px] h-[35.5px] pc:w-[240px] pc:h-[60.88px]"
        /> */}
        <h1 className="w-[140px] font-bold pc:w-[240px] ">
          DRAYCON
          {/* <span className="block">CON</span> */}
        </h1>
        <div className="pc:flex  hidden">
          {navdatajson.map((item, key) => (
            <div key={item.title.name} className="bg-[#ffffff]">
              <div className="main py-5 font-normal hover:text-[red] px-[7px] lg:px-[20px] ">
                {item.title.name}
              </div>
              <div className="hidden sub absolute right-0 left-0 top-[95px] pc:top-[110px] z-[999]">
                <NavSubFolders data={item} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 shrink-0 ">
          <Link href="/">
            <button className="bg-[red] text-[white] hidden pc:block cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[500] border rounded-[6px] border-solid border-[#047dba]">
              Join Now
            </button>
          </Link>
          <Link href="/">
            <button className="pc:text-[red] pc:bg-[white] bg-[red] text-[white] cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[500] border rounded-[6px] border-solid border-[#047dba]">
              Start
            </button>
          </Link>
        </div>
      </div>
      <div className=" absolute pc:static right-0 xxxs:right-5 top-[33px] pc:top-[50px]">
        <input type="checkbox" id="check" className="hidden" />
        <label
          htmlFor="check"
          className="navdrop-ctn block pc:hidden absolute right-5"
          onClick={() => setNavBarToggle(!navBarToggle)}
        >
          {navBarToggle ? (
            <FaBars size={25} className="navdrop-1" />
          ) : (
            <RiCloseFill size={25} className="navdrop-2" />
          )}
        </label>
      </div>

      <NavBarr data={{ setNavBarToggle, navBarToggle }} />
    </nav>
  );
}

export default NavBar;