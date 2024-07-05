import Frame from "../../../assets/Frame.png";

const InfoCard = () => {
  return (
    <div className="flex items-center bg-white rounded-md gap-2 min-w-[312px] min-h-[80px] pr-2">
      <img src={Frame} alt="frame" className="object-contain" />
      <div className="flex flex-col py-6">
        <p className="w-full">امنیت پرداخت</p>
        <p className="text-[12px] text-[#94A3B8] w-full">
          پرداخت مطمئن با تمامی کارت های عضو شتاب
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
