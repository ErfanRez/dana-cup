import React from "react";

function Headers() {
  return (
    <header className="  w-full  mb-[132px]">
      <div className=" flex justify-stretch  mr-5 ml-5">
        <div className="w-1/4 flex mt-1">
          <img
            className="w-15 h-15 rounded-md"
            src="/public/logo.png"
            alt="nav-logo"
          />
          <div className="flex-col pt-4 mr-3">
            <h1 className="font-bold">کـتـابـخـونـه</h1>
            <p className="text-[#94A3B8]">فروشگاه آنلاین کتاب</p>
          </div>
        </div>
        <div className="w-2/4  h-full flex border bg-[#E2E8F0]  border-[#9CA3AF] rounded m-3 p-3">
          <img
            src="/public/searchicon.png"
            className="w-7 h-7  "
            alt="searchicon"
          />
          <input
            className="w-full mr-3 bg-transparent placeholder:text-[#9CA3AF]"
            type="text"
            placeholder="جستجو توی کتابخونه..."
          />
        </div>
        <div className=" flex w-1/4  justify-between items-center p-2">
          <button className="w-2/4 p-3  border border-[#9CA3AF]  rounded-md">
            ورود / ثبت‌نام
          </button>
          <button className=" p-3 flex justify-center border border-[#9CA3AF] rounded-md   ">
            <img
              className="justify-center "
              src="/public/homeIcon.png"
              alt="homeIcon"
            />
          </button>
          <button className="p-3 flex justify-center border  border-[#9CA3AF]  rounded-md  ">
            <img src="/public/darkmodeIcon.png" alt="darkmodeicon" />
          </button>
        </div>
      </div>
      <div className="flex justify-between mr-5 ml-5 mt-3">
        <div className="flex ">
          <div className="flex mr-5">
            <img src="/public/homeiccat.png" alt="" />
            <button className="text-[#64748B]">خانه</button>
          </div>
          <div className="flex mr-5">
            <img src="/public/audiobook.png" alt="audiobook" />
            <button className="text-[#64748B]">کتاب صوتی</button>
          </div>
          <div className="flex mr-5 ">
            <img src="/public/electro.png" alt="electroBook" />
            <button className="text-[#64748B]">کتاب الکترونیک</button>
          </div>
          <div className="flex mr-5">
            <img src="/public/jeneral.png" alt="electroBook" />
            <button className="text-[#64748B]">عمومی</button>
          </div>
          <div className="flex mr-5">
            <img src="/public/uni.png" alt="electroBook" />
            <button className="text-[#64748B]">درسی و دانشگاهی </button>
          </div>
          <div className="flex mr-5">
            <img src="/public/roman.png" alt="roman" />
            <button className="text-[#64748B]">رمان و داستان</button>
          </div>
        </div>
        <div className="flex">
          <img src="/public/froshShegeft.png" alt="" />
          <p className="text-[#EF4444]">فروش شگفت‌انگیز</p>
        </div>
      </div>
    </header>
  );
}

export default Headers;
