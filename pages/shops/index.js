import Head from "next/head";
import Image from "next/image";
import { HeroBannerSlider } from "../../components";

import { useDispatch } from "react-redux";
import { inriaSans } from "../../components/utils/getinriaFont";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
// Dummy Data

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

export default function Shops() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>Shops - Ecommerce</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${inriaSans.className} px-4 md:px-10 xl:px-12 max-w-7xl mx-auto pb-9 md:pb-0`}
      >
        <div className="overflow-hidden">
          {/* <HeroBannerSlider /> */}
          <div className="mt-0 sm:mt-1 md:mt-4 lg:mt-5 pb-5">
            <section className="mb-1.5">
              <div className="flex items-center justify-between">
                <h4
                  className="text-lg sm:text-md md:text-xl font-bold"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    // padding: "10px",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    borderRadius: "4px",
                  }}
                >
                  All Brands
                </h4>
                <div className="flex ">
                  <div className="w-full ">
                    <div className="flex items-center">
                      <input
                        className=" border shadow-sm  px-2 py-0.5  md:py-1.5 border-[#ccc]  w-24 sm:w-full  py-[4px] rounded-tl-md outline-none rounded-bl-md px-3 sm:px-4 border border-[#ccc] border-r-0"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <button className="py-[8px] rounded-tr-md rounded-br-md px-4 bg-black">
                    <AiOutlineSearch color="white" />
                  </button>
                </div>
              </div>
              <div className="mt-3 shop-by-brands-section md:mt-5 grid auto-rows-[1fr] sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-8 gap-3">
                {BRANDS.map((brand) => {
                  return (
                    <div
                      key={brand.title}
                      onClick={() =>
                        router.push(`/product-shop/${brand.title}`)
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
            </section>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </React.Fragment>
  );
}
