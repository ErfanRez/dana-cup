import React from "react";

function SingleProduct() {
  return (
    <div className="flex  w-full h-full">
      <div className="flex-col justify-center w-2/3 ">
        <div className="flex justify-between ">
          <img className="p-20 " src="/public/singledetail.png" alt="" />
          <div className="flex-col w-1/4 mt-20">
            <img className="mb-8" src="/public/sava.png" alt="" />
            <img className="mb-8" src="/public/share.png" alt="" />
            <img src="/public/otheroption.png" alt="" />
          </div>
        </div>
        <div className="flex-col">
          <div className="flex border-b border-[#94A3B8] pb-3">
            <p className="ml-4 mr-3 font-bold text-[#0F172A] text-xl">درباره معجزه‌های خواربارفروشی نامیا</p>
            <p className="text-[#94A3B8]">شناسنامه</p>
          </div>
          <p className="p-5 text-[#475569] text-lg">«در سیزدهم سپتامبر، دقیقاً از نیمه‌شب تا طلوع آفتاب، جعبه‌ی مشاوره‌ی خواربارفروشی نامیا فقط برای یک شب باز می‌شود.» شبی سه جوان خلاف‌کار،
             بعد از آخرین دزدی‌شان در خواربارفروشی متروکه‌ای مخفی می‌شوند. در کمال تعجب، نامه‌ی مرموزی از دریچه‌ی پستِ روی کرکره به داخل مغازه می‌افتد، درحالی‌که هیچ‌کس بیرون مغازه نیست. نویسنده‌ی نامه
              درخواست عجیبی دارد؛ او دغدغه‌ای دارد و از آن‌ها توصیه می‌خواهد. این درخواست به‌ظاهر ساده در این مغازه‌ی غیرمعمولی باعث می‌شود این سه پسر ماجراجویی اسرارآمیزی را آغاز کنند. نامه‌های آن‌ها فراتر از زمان و مکان می‌روند
             ، به دست آدم‌های مختلف می‌رسند، پرده از راز نامیا برمی‌دارند و مسبب معجزه‌های بسیاری در زندگی افرادی می‌شوند که به‌ظاهر به هم‌ نامرتبط‌‌اند اما سرنوشتشان به یکدیگر گره خورده است.</p>
        </div>
        <img className="p-5 mr-3" src="/public/dastehbandi.png" alt="" />
        <div>
            <img className="mt-3 mr-3" src="/public/shenasnameh.png" alt="" />
        </div>
      </div>

      <div className="flex-col w-1/3  ">
        <div className="">
          <div className="flex p-5 justify-center mt-2 ml-20">
            <img className="p-6" src="/public/emtiaz.png" alt="emtiaz" />
            <img
              className="p-2 mr-2"
              src="/public/offer-price.png"
              alt="offer"
            />
          </div>
          <div className="flex-col justify-center mr-20 ">
            <button className="bg-[#14B8A6] w-2/3 p-3 border m-2 rounded-md text-white">
              افزودن به سبد خرید
            </button>
            <button className=" w-2/3 p-3 border m-2  rounded-md text-[#0F172A]">
              خواندن نمونه
            </button>
          </div>
        </div>
        <div className="flex-col mt-20 p-5 ">
          <p className="pr-20 font-bold">گذاشتن این کتاب در...</p>
          <div className="flex pr-20 pl-20 ">
            <button className="w-1/2 m-2 p-3 border border-[#9CA3AF]  rounded-md">
              علاقه‌مندی‌ها
            </button>
            <button className="w-1/2 m-2 p-3 border border-[#9CA3AF]  rounded-md">
              می‌خواهم بخوانم
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
