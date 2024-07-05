import Cover from "../assets/Book.png";
import { FaRegStar } from "react-icons/fa";

const BookCard = () => {
  return (
    <figure>
      <img src={Cover} alt="cover" className="min-w-[220px] object-cover" />
      <figcaption className="flex flex-col">
        <p className="text-md">معجزه های خواربار فروشی نامیا</p>
        <p className="text-secondary-200 text-sm">رمان خارجی/عرفان رضائی</p>
        <div className="flex justify-between mt-2">
          <div className="bg-[#FFEDD5] w-[58px] h-[27px] text-center flex justify-center items-center gap-2 border rounded-[8px] text-[#F59E0B] mt-auto">
            <FaRegStar />
            4.5
          </div>
          <div className="flex flex-col text-secondary-100">
            <p className="line-through">21,000,000 تومان</p>
            <p className="text-[#10B981] font-bold">58,000,000 تومان</p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default BookCard;
