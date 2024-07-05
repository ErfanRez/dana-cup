import cover from "../../../assets/Book.png";
import { CiShoppingBasket } from "react-icons/ci";

const BestSeller = () => {
  return (
    <div className="min-w-[648px] min-h-[314px] bg-white rounded-lg flex p-[24px]">
      <img src={cover} alt="cover" />
      <div className="pr-[24px] flex flex-col">
        <p className="font-bold">معجزه های خواربار فروشی نامیا</p>
        <div className="flex gap-4 mt-2">
          <div className="flex flex-col">
            <p className="text-sm text-[#94A3B8]">دسته بندی</p>
            <p>رمان خارجی</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#94A3B8]">دسته بندی</p>
            <p>رمان خارجی</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#94A3B8]">دسته بندی</p>
            <p>رمان خارجی</p>
          </div>
        </div>
        <p className="text-[#64748B] mt-2">
          یاران حلقه‌، اولین جلد از سه‌گانۀ حماسی ارباب حلقه‌ها، اثر نویسندۀ
          انگلیسی جی‌.‌آر.آر تالکین است. جلد دوم این کتاب با نام «دو برج» در سال
          1954 و جلد سوم آن با نام «بازگشت شاه» در سال 1955 منتشر شد. داستان این
          سه‌گانه در دنیای خیالی سرزمین میانه می‌گذرد و راوی اتحاد، تلاش‌ها و
          مبارزات خستگی‌ناپذیر موجودات خیالی در نبرد با اهریمن (سائورون) است.
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col text-secondary-100 mt-4">
            <p className="line-through">21,000,000 تومان</p>
            <p className="text-[#10B981] font-bold">58,000,000 تومان</p>
          </div>
          <button className="min-w-[90px] min-h-[40px] bg-[#14B8A6] text-white flex items-center justify-center border rounded-md mt-auto">
            <CiShoppingBasket />
            خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
