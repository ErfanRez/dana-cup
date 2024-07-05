import profile1 from '../../../../public/profile1.png'

const WriterProfile = () => {
  return (
    <div className="w-20 h-28 bg-white rounded-md shadow-sm">
      <div className="p-3">
        <img src={profile1} alt="" className="w-[95%]" />
        <h2 className="text-[.55rem] w-full text-[#14B8A6] font-bold pt-3">
          آگاتا کریستی
        </h2>
        <p className="text-[.4rem] font-bold pt-1 text-[#94a3b8]">
          20 اثر ترجمه شذه
        </p>
      </div>
    </div>
  );
}

export default WriterProfile
