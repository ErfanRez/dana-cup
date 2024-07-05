import InfoCard from "./components/InfoCard";
import BookCard from "../../components/BookCard";
import Thumbnail from "./components/Hero";
import BestSeller from "./components/BestSeller";
import Writer from "./components/Writer";
import WriterNames from "./components/WriterNames";

const Home = () => {
  return (
    <div className="px-[5%]">
      <section className="flex overflow-auto gap-6">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </section>

      <section className="mt-[120px]">
        <p className="font-bold mb-5">تخفیفات شگفت انگیز</p>
        <div className="flex gap-[55px] overflow-auto">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </section>

      <section className="mt-[48px] flex gap-4 overflow-auto">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </section>

      <section className="mt-[48px]">
        <p className="font-bold mb-5">پرفروش ترین کتاب ها</p>
        <div className="flex gap-[55px] overflow-auto">
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
        </div>
      </section>

      <section className="mt-[120px]">
        <p className="font-bold mb-5">تازه‌های نشر</p>
        <div className="flex gap-[55px] overflow-auto">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </section>
      <Writer />
      <WriterNames />
    </div>
  );
};

export default Home;
