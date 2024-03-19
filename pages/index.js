import Head from "next/head";
import Image from "next/image";
import { HeroBannerSlider } from "../components";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Button from "../components/Button";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { inriaSans } from "../components/utils/getinriaFont";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
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

const TOUR_DESTINATIONS = [
  {
    id: 1,
    imgSrc: "/images/goldengatebridge.jpeg",
    title:
      "Sundarban Premium Group Tour Package - 50 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
  {
    id: 2,
    imgSrc: "/images/tour-1.png",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    newPrice: "140,000",
  },
  {
    id: 3,
    imgSrc: "/images/changi.jpeg",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
  {
    id: 4,
    imgSrc: "/images/sauditwintower.jpeg",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
  {
    id: 5,
    imgSrc: "/images/singapore.jpeg",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
  {
    id: 6,
    imgSrc: "/images/changi.jpeg",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
  {
    id: 7,
    imgSrc: "/images/burjkhalifa.jpeg",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
  {
    id: 8,
    imgSrc: "/images/nwfp.jpeg",
    title:
      "Economic Sajek Valley Group Tour Package - 35 persons with 1 Night stay",
    oldPrice: "262,500",
    newPrice: "140,000",
  },
];

export default function HomePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const showItemAddedToast = () => {
    toast("Item added to cart", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleAddToCart = (destination) => {
    dispatch(
      addToCart({
        id: destination.id,
        title: destination.title,
        image: destination.imgSrc,
        price: destination.newPrice,
      })
    );
    showItemAddedToast();
  };
  return (
    <React.Fragment>
      <Head>
        <title>Meta - Ecommerce</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${inriaSans.className} px-4 md:px-10 xl:px-12 max-w-7xl mx-auto pb-9 md:pb-0`}
      >
        <div className="overflow-hidden">
          <HeroBannerSlider />
          <div
            className="pt-2 md:pt-4 pb-5"
            // style={{ paddingTop: "7px" }}
          >
            <section className="mb-1.5">
              <div className=" flex justify-between items-center">
                <div className="flex">
                  <div className="mr-2 w-2 h-8 bg-[#0FA8A3] rounded-r-md" />
                  <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold">
                    Shop by Brands
                  </h2>
                </div>
                <div className="flex md:mt-0 items-center">
                  {/* <div className="md:flex hidden">
                    <input
                      type="text"
                      className="border outline-black shadow-sm  w-40 sm:w-80 md:w-80 rounded-sm  lg:text-lg px-3 py-1.5 border-[#ccc]"
                      placeholder="Search"
                      // onChange={(e) => setFirstName(e.target.value)}
                    />
                    <button
                      // onClick={handleAddOpen}
                      className="flex  w-[25%]  bg-black  text-white  rounded-sm  items-center justify-center"
                    >
                      <div>
                        <SearchIcon />
                      </div>
                    </button>
                  </div> */}
                  <button
                    // onClick={handleAddOpen}
                    // style={{

                    //   paddingTop: "8px",
                    //   paddingBottom: "8px",
                    // }}
                    className="ml-4 h-8 md:flex w-28  bg-red-600  text-white rounded-sm  items-center justify-center"
                  >
                    <p className="text-xs">VIEW ALL</p>
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
            <section className="pt-2 md:pt-4 mb-5">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <div className="mr-2 w-2 h-8 bg-[#BF1D22] rounded-r-md" />
                  <h2 className="text-xl sm:text-xl md:text-2xl font-bold h-full">
                    Products
                  </h2>
                </div>
                <div className="flex md:mt-0 items-center justify-end">
                  <div className="flex w-full px-1">
                    <div className="w-full relative">
                      <div
                        className="flex items-center"
                        // style={{ border: "1px solid #ccc" }}
                      >
                        <input
                          className=" border shadow-sm  px-2 py-0.5  md:py-1.5 border-[#ccc]  w-28 sm:w-full  py-[4px] rounded-tl-md outline-none rounded-bl-md px-3 sm:px-4 border border-[#ccc] border-r-0"
                          // onBlur={handleSearchClose}
                          // onFocus={handleSearchOpen}
                          // onChange={handleSearchOpen}
                          // onScroll={handleSearchClose}
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                      {/* {toggleSearch && (
                        <SearchBar onClose={handleSearchClose} />
                      )} */}
                    </div>
                    <button
                      className="py-[8px] rounded-tr-md rounded-br-md px-4 bg-black"
                      // className="py-[8px] rounded-tr-md rounded-br-md px-5 bg-black"
                    >
                      <AiOutlineSearch color="white" />
                    </button>
                  </div>
                  {/* <div className="flex justify-end">
                    <input
                      type="text"
                      className="border outline-black shadow-sm   w-[61.5%] sm:w-60 md:w-80 rounded-sm  lg:text-lg px-2 py-0.5  md:py-1.5 border-[#ccc]"
                      placeholder="Search"
                      // onChange={(e) => setFirstName(e.target.value)}
                    />
                    <button
                      // onClick={handleAddOpen}
                      className="flex  w-[20%]  bg-black  text-white  rounded-sm  items-center justify-center"
                    >
                      <div>
                        <SearchIcon />
                      </div>
                    </button>
                  </div> */}
                  <button
                    // onClick={handleAddOpen}
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                    className="ml-4 md:flex hidden  w-28  bg-red-600  text-white rounded-sm  items-center justify-center"
                  >
                    <p className="text-xs">VIEW ALL</p>
                  </button>
                </div>
                {/* <Button
                  title='View All'
                  icon={<ArrowCircleRightOutlinedIcon fontSize='medium' />}
                /> */}
              </div>
              <div className="mt-2.5 md:mt-5 travel-tour-section">
                {TOUR_DESTINATIONS.map((destination, index) => {
                  return (
                    <div
                      key={destination.title + index}
                      className="flex flex-col justify-between bg-white destination-card rounded-md px-3 py-3 shadow-sm"
                    >
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          router.push(`/product-detail/${destination.id}`)
                        }
                      >
                        <div className="rounded-md">
                          <Image
                            className="max-w-[100%] w-full h-full object-contain mx-auto rounded-md"
                            src={destination.imgSrc}
                            alt={destination.title}
                            width={150}
                            height={150}
                          />
                        </div>
                        <p className="text-xs title font-normal lines-2 md:text-sm text-gray-700 mt-4 md:mt-6">
                          {destination.title}
                        </p>
                      </div>
                      <div className=" flex flex-col justify-end mt-1 prices w-full">
                        {destination.oldPrice && (
                          <del className="text-sm text-slate-300 font-light mt-1">
                            ${destination.oldPrice}
                          </del>
                        )}
                        <div className="flex justify-between gap-1 items-center w-full">
                          <p className="text-base sm:text-lg xl:text-base font-bold">
                            ${destination.newPrice}
                          </p>
                          <button onClick={() => handleAddToCart(destination)}>
                            <LocalMallOutlinedIcon className="text-slate-300" />
                          </button>
                          {/* <LocalMallOutlinedIcon className='text-slate-300' /> */}
                        </div>
                      </div>
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
