import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { inriaSans } from "./utils/getinriaFont";

import { Box, MenuItem, MenuList, Paper, styled } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import BannerCarouselItem from "./carousels/bannerCarouselItem";
import { useRouter } from "next/router";

var settings = {
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3300,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

var smallSettings = {
  // infinite: true,
  speed: 300,
  autoplay: true,
  arrows: false,
  slidesToShow: 2,
  autoplaySpeed: 3500,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 520,
      settings: {
        autoplay: false,
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 375,
      settings: {
        autoplay: false,
        infinite: false,
        slidesToShow: 1.2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function BannerSlider() {
  const router = useRouter();
  return (
    <div className="mb-3">
      <div className="md:hidden">
        {/* ------------ Banner ------------ */}
        <div>
          <div className="my-1 rounded-lg overflow-hidden">
            <SliderRoot {...settings}>
              {[...Array(4)].map((_, index) => (
                <BannerCarouselItem
                  bannerImg="/banner/amazon.jpg"
                  alt="Banner Deal"
                />
              ))}
            </SliderRoot>
          </div>
          <div className="flex items-center justify-between pt-2 pb-2">
            <h2 className="text-lg sm:text-xl font-bold">Ongoing Campaigns</h2>
            <p className="text-gray-400 hover:underline underline-offset-4 cursor-pointer">
              Show All
            </p>
          </div>
          <div className="rounded-md overflow-hidden">
            <SliderRoot {...smallSettings}>
              <div>
                <div className=" h-auto min-h-[7vh]  rounded-md bg-[url('/images/cart.png')] bg-cover">
                  <div className="h-auto bg-teal-600/50 banner rounded-md">
                    <div className="sm:text-xl md:text-3xl uppercase font-bold smallBannerHeading ">
                      MEGA SME Deal
                    </div>
                    <div className="smallbannerDesc font-light truncate">
                      Mega SME Deal for SME Retailers
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className=" h-full min-h-[7vh] rounded-md bg-[url('/images/deal.png')] bg-cover">
                  <div className="h-full bg-red-400/50 banner rounded-md">
                    <div className="sm:text-xl md:text-3xl uppercase font-bold smallBannerHeading ">
                      POD
                    </div>
                    <div className="smallbannerDesc font-light truncate">
                      Payment on Delivery within 7 Days
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-auto min-h-[7vh]  rounded-md bg-[url('/images/cart.png')] bg-cover">
                  <div className="h-auto bg-teal-600/50 banner rounded-md">
                    <div className="sm:text-xl md:text-3xl uppercase font-bold smallBannerHeading ">
                      MEGA SME Deal
                    </div>
                    <div className="smallbannerDesc font-light truncate">
                      Mega SME Deal for SME Retailers
                    </div>
                  </div>
                </div>
              </div>
            </SliderRoot>
          </div>

          {/* <div className='flex gap-3 overflow-x-auto scroll-bar-style'>
              <div className="h-auto min-h-[7vh] min-w-[70vw] rounded-md bg-[url('/images/cart.png')] bg-cover">
                <div className='flex-1 h-auto bg-teal-600/50 banner rounded-md'>
                  <div className=' text-xl sm:text-2xl md:text-3xl uppercase font-bold'>
                    MEGA SME Deal
                  </div>
                  <div className='text-sm sm:text-md font-light'>
                    Mega SME Deal for SME Retailers
                  </div>
                </div>
              </div>
              <div className="flex-1 h-full min-h-[7vh] min-w-[70vw] rounded-md bg-[url('/images/deal.png')] bg-cover">
                <div className='h-full bg-red-400/50 banner rounded-md'>
                  <div className='text-xl sm:text-2xl md:text-3xl uppercase font-bold'>
                    POD
                  </div>
                  <div className='text-sm sm:text-md font-light'>
                    Payment on Delivery within 7 Days
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </div>
      <div className="hidden md:block lg:hidden">
        {/* ------------ Banner ------------ */}
        <div>
          <div className="my-4">
            <div className="rounded-lg overflow-hidden">
              <SliderRoot {...settings}>
                {[...Array(4)].map((_, index) => (
                  <BannerCarouselItem
                    key={index}
                    bannerImg="/banner/amazon.jpg"
                    alt="Banner Deal"
                  />
                ))}
              </SliderRoot>
              {/* <Slider {...settings}>
                <div>
                  <Image
                    className='h-[300px] rounded-lg w-full object-cover'
                    src={'/banner/amazon.jpg'}
                    alt={'Deal'}
                    height={1200}
                    width={1200}
                  />
                </div>
                <div>
                  <Image
                    className='h-[300px] rounded-lg w-full object-cover'
                    src={'/banner/amazon.jpg'}
                    alt={'Deal'}
                    height={1200}
                    width={1200}
                  />
                </div>
                <div>
                  <Image
                    className='h-[300px] rounded-lg w-full object-cover'
                    src={'/banner/amazon.jpg'}
                    alt={'Deal'}
                    height={1200}
                    width={1200}
                  />
                </div>
                <div>
                  <Image
                    className='h-[300px] rounded-lg w-full object-cover'
                    src={'/banner/amazon.jpg'}
                    alt={'Deal'}
                    height={1200}
                    width={1200}
                  />
                </div>
              </Slider> */}
            </div>
            <div className="mt-2.5 rounded-md overflow-hidden">
              <SliderRoot {...smallSettings}>
                <div>
                  <div className="h-auto  rounded-md bg-[url('/images/cart.png')] bg-cover">
                    <div className="h-auto bg-teal-600/50 banner rounded-md">
                      <div className="text-xl sm:text-2xl md:text-3xl uppercase font-bold">
                        MEGA SME Deal
                      </div>
                      <div className="text-md font-light">
                        Mega SME Deal for SME Retailers
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" h-full rounded-md bg-[url('/images/deal.png')] bg-cover">
                    <div className="h-full bg-red-400/50 banner rounded-md">
                      <div className="text-xl sm:text-2xl md:text-3xl uppercase font-bold">
                        POD
                      </div>
                      <div className="text-md font-light">
                        Payment on Delivery within 7 Days
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="h-auto  rounded-md bg-[url('/images/cart.png')] bg-cover">
                    <div className="h-auto bg-teal-600/50 banner rounded-md">
                      <div className=" text-xl sm:text-2xl md:text-3xl uppercase font-bold">
                        MEGA SME Deal
                      </div>
                      <div className="text-md font-light">
                        Mega SME Deal for SME Retailers
                      </div>
                    </div>
                  </div>
                </div>
              </SliderRoot>
            </div>
            {/* <div className='flex gap-3 pt-2 overflow-x-hidden'>
              <div className="flex-1 rounded-md bg-[url('/images/cart.png')] bg-cover">
                <div className='banner rounded-md bg-teal-600/50 h-full '>
                  <div className='text-2xl lg:text-3xl animated tada uppercase font-bold'>
                    MEGA SME Deal
                  </div>
                  <div className='text-md font-light'>
                    Mega SME Deal for SME Retailers
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-md bg-[url('/images/deal.png')] bg-cover">
                <div className='banner rounded-md bg-red-400/50 h-full'>
                  <div className='text-3xl animated tada uppercase font-semibold'>
                    POD
                  </div>
                  <div className='text-md font-light'>
                    Payment on Delivery within 7 Days
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div>
          {/* ------------ Banner ------------ */}
          <div className="mt-5 rounded-md mx-auto">
            <div className="flex justify-between">
              <div className="pt-5 w-[25%] lg:w-[22.90%]">
                <Paper
                  className="rounded-t-none -translate-y-8"
                  style={{ boxShadow: "none" }}
                >
                  <MenuList
                    sx={{
                      paddingBlock: 0,
                    }}
                  >
                    {[
                      "Desktop",
                      "Laptop",
                      "Men's Watch",
                      "Microwave Oven",
                      "Motor Bike",
                      "Refrigerator",
                      "Smart Phone",
                      "Smart TV & Android TV",
                      "Speaker",
                      "Split AC",
                    ].map((item, i, arr) => {
                      return (
                        <div key={item}>
                          <MenuItem
                            key={item}
                            className="w-full"
                            sx={{
                              paddingTop: "12px",
                              paddingBottom: "12px",
                            }}
                            onClick={() =>
                              router.push(`/product-category/${item}`)
                            }
                          >
                            <div
                              className={`${inriaSans.className} flex items-center justify-between w-full`}
                            >
                              <p>{item}</p>
                              <KeyboardArrowRightIcon
                                sx={{
                                  height: 17,
                                }}
                              />
                            </div>
                          </MenuItem>
                          {!(i === arr.length - 1) && (
                            <hr className="border-gray-300" />
                          )}
                        </div>
                      );
                    })}
                  </MenuList>
                </Paper>
              </div>
              <div className="w-[74%] lg:w-[75.75%] overflow-hidden">
                <div className="mb-[10px] rounded-lg overflow-hidden">
                  <SliderRoot {...settings}>
                    {[...Array(4)].map((_, index) => (
                      <BannerCarouselItem
                        key={index}
                        bannerImg="/banner/amazon.jpg"
                        alt="Banner Deal"
                      />
                    ))}
                  </SliderRoot>
                </div>
                <div className="rounded-md overflow-hidden">
                  <SliderRoot {...smallSettings}>
                    <div>
                      <div className="h-auto  rounded-md bg-[url('/images/cart.png')] bg-cover">
                        <div className="h-auto bg-teal-600/50 banner rounded-md">
                          <div className=" text-xl sm:text-2xl md:text-3xl uppercase font-bold">
                            MEGA SME Deal
                          </div>
                          <div className="text-md font-light">
                            Mega SME Deal for SME Retailers
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className=" h-full rounded-md bg-[url('/images/deal.png')] bg-cover">
                        <div className="h-full bg-red-400/50 banner rounded-md">
                          <div className="text-xl sm:text-2xl md:text-3xl uppercase font-bold">
                            POD
                          </div>
                          <div className="text-md font-light">
                            Payment on Delivery within 7 Days
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="h-auto  rounded-md bg-[url('/images/cart.png')] bg-cover">
                        <div className="h-auto bg-teal-600/50 banner rounded-md">
                          <div className=" text-xl sm:text-2xl md:text-3xl uppercase font-bold">
                            MEGA SME Deal
                          </div>
                          <div className="text-md font-light">
                            Mega SME Deal for SME Retailers
                          </div>
                        </div>
                      </div>
                    </div>
                  </SliderRoot>
                </div>
                {/* <div className='flex gap-3 lg:pl-1 xl:pl-0 mr-3'>
                  <div className="min-h-[10vh] min-w-[50%] rounded-md bg-[url('/images/cart.png')] bg-cover">
                    <div className='banner bg-teal-600/50 rounded-md h-full'>
                      <div className='text-3xl animated tada uppercase font-bold'>
                        MEGA SME Deal
                      </div>
                      <div className='text-md font-light'>
                        Mega SME Deal for SME Retailers
                      </div>
                    </div>
                  </div>
                  <div className="min-h-[10vh] min-w-[50%] rounded-md bg-[url('/images/deal.png')] bg-cover">
                    <div className='banner rounded-md bg-red-400/50 h-full'>
                      <div className='text-3xl animated tada uppercase font-semibold'>
                        POD
                      </div>
                      <div className='text-md font-light'>
                        Payment on Delivery within 7 Days
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const SliderRoot = styled(Slider)(() => ({
  "& .slick-track > *": {
    paddingInline: "5px !important",
  },
  "& .slick-list": {
    marginInline: "-5px",
  },
}));
