import { useState } from "react";

const Public = () => {
  const [isDirected, setIsDirected] = useState(false);
  const handleDirected = () => {
    setIsDirected(true);
  };
  return (
    // image
    <div className="flex items-center justify-center bg-red-500 w-full h-[100vh] Login">
      {/* card wrapper*/}
      <div
        className={`"h-[275px] w-[280px] bg-white rounded-lg p-1 ${
          isDirected && "h-[310px]"
        }"`}
      >
        <div className="h-full w-full p-2">
          <div className="flex items-center justify-center">
            <div className="flex gap-2 items-center pt-3">
              <img src="/logo.png" alt="" className="size-10" />
              <div>
                <h2 className="font-extrabold">کتابخونه</h2>
                <p className="text-secondary-100 text-xs">
                  فروشگاه آنلاین کتاب
                </p>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <h3
              className={`font-bold text-sm text-center ${
                isDirected && "pb-3"
              }`}
            >
              ورود / ثبت نام
            </h3>
            <p className="text-center text-secondary-100 text-xs tracking-tighter">
              {isDirected
                ? "کد تایید برای شماره 123456789 ارسال شد."
                : "لطفا تلفن همراه خود را وارد نمایید."}
            </p>
          </div>
          {/* <div className="pt-3 pb-3 text-xs flex flex-col gap-2 items- justify-between">
            <form action="" className="flex flex-col">
              <label htmlFor="" className="py-3">
                تلفن همراه
              </label>
              <input
                type="search"
                className="bg-secondary-color-100 border border-1 rounded-lg py-2 h-full px-1"
                placeholder="نام کاربری"
              />
            </form>
          </div>
          <div className=" flex items-center justify-between">
            <input
              type="numeric"
              className="size-12 border border-1 rounded-lg"
            />
            <input
              type="numeric"
              className="size-12 border border-1 rounded-lg"
            />
            <input
              type="numeric"
              className="size-12 border border-1 rounded-lg"
            />
            <input
              type="numeric"
              className="size-12 border border-1 rounded-lg"
            />
          </div> */}
          {!isDirected ? (
            <div className="pt-3 pb-3 text-xs flex flex-col gap-2 items- justify-between">
              <form action="" className="flex flex-col">
                <label htmlFor="" className="py-3">
                  تلفن همراه
                </label>
                <input
                  type="search"
                  className="bg-slate-100 border rounded-lg py-2 h-full px-1"
                  placeholder="نام کاربری"
                />
              </form>
            </div>
          ) : (
            <div className=" flex items-center justify-between py-3">
              <input
                type="numeric"
                className="size-12 border border-1 rounded-lg text-center"
                tabIndex={0}
              />
              <input
                type="numeric"
                className="size-12 border border-1 rounded-lg text-center"
                tabIndex={1}
              />
              <input
                type="numeric"
                className="size-12 border border-1 rounded-lg text-center"
                tabIndex={2}
              />
              <input
                type="numeric"
                className="size-12 border border-1 rounded-lg text-center"
                tabIndex={3}
              />
            </div>
          )}

          <div className="pt-3">
            <button
              className="bg-primary w-full text-white rounded-lg flex items-center justify-center p-2 text-sm"
              onClick={() => handleDirected()}
            >
              ورود
            </button>
            {isDirected && (
              <p className="text-[10px] text-secondary-100 text-center p-5 tracking-tighter">
                00:00 تا ارسال کد فعالسازی مجدد
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Public;
