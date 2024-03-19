import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { inriaSans } from "../components/utils/getinriaFont";
const SubCategories = [
  { id: 1, imgSrc: "/categories/ring.jpeg", title: "Men's Ring" },
  { id: 3, imgSrc: "/categories/necklace.png", title: "Women's Necklace" },
  { id: 2, imgSrc: "/categories/shoes.webp", title: "Men's Shoes" },
  { id: 4, imgSrc: "/categories/shirt.webp", title: "Men's T-shirt" },
  { id: 5, imgSrc: "/categories/grocery.jpeg", title: "Groceries" },
  { id: 7, imgSrc: "/categories/coke.jpeg", title: "Coca Cola" },
  { id: 6, imgSrc: "/categories/sunsilk.png", title: "Sunsilk" },
  { id: 8, imgSrc: "/categories/safeguard.jpeg", title: "Safeguard Soap" },
  { id: 9, imgSrc: "/categories/palmolive.jpeg", title: "Palmolive" },
];
const BRANDS = [
  { id: 1, imgSrc: "/images/mi.png", title: "MI" },
  { id: 3, imgSrc: "/images/samsung.png", title: "Samsung" },
  { id: 2, imgSrc: "/images/toyota.png", title: "Toyota" },
  { id: 4, imgSrc: "/images/lux.png", title: "Lux" },
  { id: 5, imgSrc: "/images/nestle.png", title: "Nestle" },
  { id: 7, imgSrc: "/images/apple.png", title: "Apple" },
  { id: 6, imgSrc: "/images/nokia.png", title: "Nokia" },
  { id: 8, imgSrc: "/images/garnier.png", title: "Garnier" },
  { id: 9, imgSrc: "/images/motorola.png", title: "Motorola Coorporation" },
  { id: 10, imgSrc: "/images/lifebuoy.png", title: "Lifebuoy" },
  { id: 11, imgSrc: "/images/tesla.jpeg", title: "Tesla" },
];

const CatergoriesPage = (props) => {
  const [activeTab, setActiveTab] = useState("SubCategories");
  const router = useRouter();

  const switchTabHandler = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div
        className={`${inriaSans.className} px-3 md:px-10 xl:px-12 max-w-7xl mx-auto pb-20 md:pb-0`}
      >
        <div className="mt-0 md:mt-3 lg:mt-4 flex gap-5">
          <button
            className={`${
              activeTab === "SubCategories" ? "bg-black text-white" : ""
            } px-3 py-2 rounded-md`}
            onClick={() => {
              switchTabHandler("SubCategories");
            }}
          >
            SubCategories
          </button>
          <button
            className={`${
              activeTab === "Brands" ? "bg-black text-white" : ""
            } px-3 py-2 rounded-md`}
            onClick={() => {
              switchTabHandler("Brands");
            }}
          >
            Brands
          </button>
          <button
            className={`${
              activeTab === "Shops" ? "bg-black text-white" : ""
            } px-3 py-2 rounded-md`}
            onClick={() => {
              switchTabHandler("Shops");
            }}
          >
            Shops
          </button>
        </div>
        <div className="mt-5">
          {activeTab === "SubCategories" && (
            <div className="pb-5 mt-3 shop-by-brands-section md:mt-5 grid auto-rows-[1fr] sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-8 gap-3">
              {SubCategories.map((brand) => {
                return (
                  <div
                    key={brand.title}
                    onClick={() =>
                      router.push(`/product-category/${brand.title}`)
                    }
                    className="flex flex-col justify-between items-center bg-white rounded-md p-3 sm:p-4 shadow-sm cursor-pointer"
                  >
                    <div>
                      <Image
                        className="max-w-[90%] object-contain mx-auto h-[80px] md:h-[90px] lg:h-[110px]"
                        src={brand.imgSrc}
                        alt={brand.title}
                        width={150}
                        height={150}
                      />
                    </div>
                    <p className="pt-2 textHideTwoLines text-center text-sm sm:text-md font-bold leading-4 sm:leading-5">
                      {brand.title}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
          {activeTab === "Shops" && (
            <div className="pb-5 mt-3 shop-by-brands-section md:mt-5 grid auto-rows-[1fr] sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-8 gap-3">
              {BRANDS.map((brand) => {
                return (
                  <div
                    key={brand.title}
                    onClick={() => router.push(`/product-shop/${brand.title}`)}
                    className="flex flex-col justify-between items-center bg-white rounded-md p-3 sm:p-4 shadow-sm cursor-pointer"
                  >
                    <div>
                      <Image
                        className="max-w-[90%] object-contain mx-auto h-[80px] md:h-[90px] lg:h-[110px]"
                        src={brand.imgSrc}
                        alt={brand.title}
                        width={150}
                        height={150}
                      />
                    </div>
                    <p className="pt-2 textHideTwoLines text-center text-sm sm:text-md font-bold leading-4 sm:leading-5">
                      {brand.title}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
          {activeTab === "Brands" && (
            <div className="pb-5 mt-3 shop-by-brands-section md:mt-5 grid auto-rows-[1fr] sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-8 gap-3">
              {BRANDS.map((brand) => {
                return (
                  <div
                    key={brand.title}
                    onClick={() => router.push(`/product-shop/${brand.title}`)}
                    className="flex flex-col justify-between items-center bg-white rounded-md p-3 sm:p-4 shadow-sm cursor-pointer"
                  >
                    <div>
                      <Image
                        className="max-w-[90%] object-contain mx-auto h-[80px] md:h-[90px] lg:h-[110px]"
                        src={brand.imgSrc}
                        alt={brand.title}
                        width={150}
                        height={150}
                      />
                    </div>
                    <p className="pt-2 textHideTwoLines text-center text-sm sm:text-md font-bold leading-4 sm:leading-5">
                      {brand.title}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CatergoriesPage;
