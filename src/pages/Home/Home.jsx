import BookCard from "../../components/BookCard";
import Thumbnail from "./components/Hero";

const Home = () => {
  return (
    <div>
      <div className="flex overflow-auto gap-6">
        <div>
          <Thumbnail />
        </div>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>

      <div className="mt-[120px]">
        <p className="font-bold mb-5">تخفیفات شگفت انگیز</p>
        <div className="flex gap-[55px]">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
