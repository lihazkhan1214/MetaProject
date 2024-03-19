import Head from "next/head";
import Image from "next/image";
import { HeroBannerSlider } from "../../components";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { inriaSans } from "../../components/utils/getinriaFont";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
// Dummy Data

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

export default function ProductCategoryPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log("ID", id);
  const dispatch = useDispatch();
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
        <title>{id} Category - Ecommerce</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${inriaSans.className} px-4 md:px-10 xl:px-12 max-w-7xl mx-auto pb-9 md:pb-0`}
      >
        <div className="overflow-hidden">
          {/* <HeroBannerSlider /> */}
          <div className="mt-0  pb-5">
            <section className="pt-2 md:pt-4 mb-5">
              <div className="flex items-center justify-between lines-1">
                <h4
                  className="text-md font-bold "
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    // padding: "10px",
                    paddingTop: "2.5px",
                    paddingBottom: "2.5px",
                    borderRadius: "4px",
                  }}
                >
                  {id}
                </h4>
                <div className="flex ">
                  <div className="w-full ">
                    <div className="flex items-center">
                      <input
                        className=" border shadow-sm  px-2 py-0.5  md:py-1.5 border-[#ccc]  w-28 sm:w-full  py-[4px] rounded-tl-md outline-none rounded-bl-md px-3 sm:px-4 border border-[#ccc] border-r-0"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <button className="py-[8px] rounded-tr-md rounded-br-md px-4 bg-black">
                    <AiOutlineSearch color="white" />
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
