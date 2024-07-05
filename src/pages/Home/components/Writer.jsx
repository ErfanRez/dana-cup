import writer from '../../../../public/writer.png';
import book1 from '../../../../public/Rectangle 7.png';
import book2 from '../../../../public/Rectangle 8.png';
import book3 from '../../../../public/Rectangle 9.png';

const Writer = () => {
  return (
    <div className="w-full h-[400px] rounded-lg shadow-md">
      <div className="p-3 flex items-center">
        {/* right side */}
        <div className="h-full flex gap-5 w-[60%] justify-center items-center">
          <img src={writer} alt="" className="h-full size-50 pt-3" />
          <div>
            <h5 className="text-red-500 pb-2 font-semibold">
              نویسنده ی برتر هفته
            </h5>
            <h3 className="text-green-900 pb-1 font-semibold">
              برندون سندرسون | brandon sanderson
            </h3>
            <p className="text-sm text-[#475569]">
              برندن سَندرسون نویسنده اهل آمریکا است. او بیشتر به خاطر سری مه
              زاد و دست داشتن برای به اتمام رساندن کتاب خیال‌پردازی حماسی چرخ
              زمان، نوشته رابرت جوردن بعد از مرگ وی، شناخته شده‌است. در اوت سال
              ۲۰۱۰، ساندرسون اولین قسمت از مجموعه کتاب‌های ده‌گانه استورم‌لایت
              آرکایو، با نام طریق شاهان را منتشر کرد.
            </p>
            <button className="w-[35%] py-2 px-1 bg-[#14B8A6] text-xs mt-5 rounded-lg text-white font-bold">
              مشاهده ی آثار بیشتر
            </button>
          </div>
        </div>
        {/* left side */}
        <div className="pr-2">
          <ul className="flex gap-2">
            <li>
              <img src={book1} alt="" className="h-44" />
            </li>
            <li>
              <img src={book2} alt="" className="h-44" />
            </li>
            <li>
              <img src={book3} alt="" className="h-44" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Writer
