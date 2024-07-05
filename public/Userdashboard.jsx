import circle from "/circle.png";
import frame from "/Frame 250.png";
import profileIcon from "/Frame1.png";
import family from "/elementss.png";
import cart from "/cart.png";
import logout from "/exit.png";
import bookmark from "/bookmark.png";
import library from "/library.png";
import shop from "/shop.png";
import wallet from "/wallet.png";

const Dashbaord = () => {
  return (
    <>
      <div className="text-black h-8 border bg-slate-700">hello</div>
      <div className="flex flex-col mx-0">
        <nav
          className="flex px-5 py-3 mt-3 mb-3 rounded-lg bg-transparent h-3 "
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-400 "
              >
                خانه
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-3 h-3 ms-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>

                <a
                  href="#"
                  class="ms-1 text-sm font-medium text-gray-700 md:ms-2  "
                >
                  پروفایل
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <div className="grid grid-cols-4 gap-3 mx-3.5 ">
          <div>
            <div className="flex flex-row items-center justify-center  my-3 rounded-lg bg-white p-2 mb-3">
              <img src={circle} className="rounded-full  ms-2 " />
              <div className="flex flex-col  text-start overflow-hidden w-full mx-3">
                <p className="text-black">کاربر عزیز</p>
                <p className="text-gray-500">0123456789</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 mx-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>

            <div className="bg-white rounded-lg p-1">
              <div className="flex flex-row items-center justify-center mx-3 my-3">
                <img src={wallet} alt="" />
                <div className="flex flex-col mx-0 text-start overflow-hidden w-full mr-2">
                  <p className="text-black ">کیف پول </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ms-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <hr className="bg-hr" />
              <div className="flex flex-row items-center justify-center mx-3 my-3">
                <img src={shop} alt="" />

                <div className="flex flex-col mx-0 text-start overflow-hidden w-full mr-2">
                  <p className="text-black"> خرید های من </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ms-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <hr className="bg-hr" />
              <div className="flex flex-row items-center justify-center mx-3 my-3">
                <img src={library} alt="" />

                <div className="flex flex-col mx-0 text-start overflow-hidden w-full mr-2">
                  <p className="text-black"> کتابخانه من </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ms-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <hr className="bg-hr" />

              <div className="flex flex-row items-center justify-center mx-3 my-3">
                <img src={bookmark} alt="" />

                <div className="flex flex-col mx-0 text-start overflow-hidden w-full mr-2">
                  <p className="text-black"> نشان شده ها </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 ms-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <hr className="bg-hr" />
              <div className="flex flex-row items-center justify-center mx-3 my-3">
                <img src={logout} alt="" />

                <div className="flex flex-col mx-0 text-start overflow-hidden w-full mr-2">
                  <p className="text-red-500"> خروج از حساب کاربری </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3  bg-white mt-3 rounded-md">
            <div className="flex flex-row mt-3 mx-3">
              <img src={frame} alt="profile" />
              <div className="flex flex-col  text-start justify-end w-full mx-3 bottom-0 p-2 ">
                <div className="flex flex-row  rounded-md  p-2 w-32 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    />
                  </svg>
                  <p className="text-black text-sm">ویرایش عکس </p>
                </div>
              </div>{" "}
            </div>
            <div className="grid grid-cols-2  mt-3 mx-3 gap-2  p-3">
              <div className="p-2">
                <div className="flex w-full justify-end rounded-lg bg-background h-10 border ">
                  <img
                    src={profileIcon}
                    alt="profileIcon"
                    className="w-5 h-4 mt-2 mr-2"
                  />
                  <input
                    type="text"
                    className="h-8 w-full rounded-full focus:outline-none bg-transparent text-sm"
                    placeholder="  نام"
                  />
                </div>

                <div className="flex w-full justify-end rounded-lg bg-background h-10 border   mt-3">
                  <img
                    src={family}
                    alt="profileIcon"
                    className="w-5 h-4 mt-2 mr-2"
                  />
                  <input
                    type="text"
                    className="h-8 w-full rounded-full focus:outline-none bg-transparent text-sm "
                    placeholder=" نام خانوادگی"
                  />
                </div>
                <div className="flex w-full justify-end rounded-lg bg-background border my-3">
                  <textarea
                    cols="30"
                    rows="5"
                    className="w-full  bg-transparent text-sm focus:outline-none mt-3 mx-2"
                    placeholder="درباره خودت بگو ... "
                  ></textarea>
                </div>
              </div>
              <div className=" border-r-2 p-2">
                <div className="flex">
                  <p className="text-sm mx-2 mt-1">جنسیت</p>
                  <div className="flex flex-row w-full gap-3 ">
                    <div class="flex items-center ps-4 border w-1/2 h-8 border-gray-200 rounded-md ">
                      <input
                        id="bordered-checkbox-1"
                        type="checkbox"
                        value=""
                        name="bordered-checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
                      />
                      <label
                        for="bordered-checkbox-1"
                        className="w-full py-4 ms-2 text-sm font-medium text-gray-900"
                      >
                        زن
                      </label>
                    </div>
                    <div class="flex items-center ps-4 border w-1/2 h-8 border-gray-200 rounded-md ">
                      <input
                        id="bordered-checkbox-1"
                        type="checkbox"
                        value=""
                        name="bordered-checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
                      />
                      <label
                        for="bordered-checkbox-1"
                        className="w-full py-4 ms-2 text-sm font-medium rounded text-gray-900"
                      >
                        مرد
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-end rounded-lg bg-background h-10 border  mt-3">
                  <img
                    src={profileIcon}
                    alt="profileIcon"
                    className="w-5 h-4 mt-2 mr-2"
                  />
                  <input
                    type="text"
                    className="h-8 w-full rounded-full focus:outline-none bg-transparent text-sm"
                    placeholder="  نام"
                  />
                </div>{" "}
                <div className="flex w-full justify-end items-center rounded-lg bg-background  border mt-3">
                  <input
                    type="text"
                    className="h-8 w-full rounded-full focus:outline-none bg-transparent text-sm mx-2"
                    placeholder="  دسته های مورد علاقه"
                  />
                  <img
                    src={cart}
                    alt="profileIcon"
                    className="w-10 h-10 mx-3 my-3"
                  />
                </div>{" "}
                <button className="w-full my-3 h-10 bg-userColor rounded-lg ">
                  <span>تایید</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbaord;
