import WriterProfile from "./WriterProfile";

const WriterNames = () => {
  return (
    <div className="">
      <h3 className="py-5 font-bold text-md">برترین نویسندگان</h3>
      <ul className="flex gap-5">
        <WriterProfile />
        <WriterProfile />
        <WriterProfile />
        <WriterProfile />
        <WriterProfile />
        <WriterProfile />
        {/* the list can go on */}
      </ul>
    </div>
  );
};

export default WriterNames;
