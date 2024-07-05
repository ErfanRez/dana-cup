import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/books";

import list from "/arrange-by-letters-a-z.png";
import down from "/down.png";
import BookCard from "../../components/BookCard";
import Header from '../../components/Headers'

const Products = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getAllProducts();

        setProducts(productsData.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  console.log(products);

  return (
    <>
      <div ><Header/></div>
      <div className="flex flex-col mx-0 mt-5">
        <div className="flex flex-row mx-4 justify-between h-16">
          {" "}
          <nav
            className="flex px-5 py-3 mt-3 mb-3 rounded-lg bg-transparent h-3 "
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-400 "
                >
                  خانه
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-3 h-3 ms-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>

                  <a
                    href="#"
                    class="ms-1 text-sm font-medium text-gray-400 md:ms-2  "
                  >
                    کتاب
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-3 h-3 ms-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>

                  <a
                    href="#"
                    class="ms-1 text-sm font-medium text-gray-700 md:ms-2  "
                  >
                    رمان خارجی
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <div>
            <div className="flex flex-row items-center justify-center mx-3 mt-5  p-2 rounded-md border border-slate-400">
              <img src={list} alt="" />

              <div className="flex flex-col mx-0 text-start overflow-hidden w-full mr-2">
                <p className="text-black mx-1"> مرتب سازی </p>
              </div>
              <img src={down} alt="" className="mt-1" />
            </div>
          </div>
        </div>
        <div className="flex flex-row mx-10 p-1 text-2xl font-bold">
          <p>رمان خارجی</p>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-6 gap-10">
            {products.length > 0 ? (
              products.map((p) => <BookCard key={p.id} product={p} />)
            ) : (
              <div className="text-center py-5 ">
                <p className="h3 text-secondary">کالایی یافت نشد. </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
