import { inriaSans } from "../../components/utils/getinriaFont";
import { BsCheck2Square } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { toast } from "react-toastify";
import Image from "next/image";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../../components/Button";
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
export default function ProductDetailPage() {
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
  const product = {
    id: 8,
    imgSrc: "/watch/1.png",
    title: "OLEVS OLV 2871 Leather Analog Watch for Men - Chocolate - KS-3",
    newPrice: "1690.00",
  };
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.imgSrc,
        price: product.newPrice,
      })
    );
    showItemAddedToast();
  };
  return (
    <div
      className={`${inriaSans.className} px-3 md:px-10 xl:px-12 max-w-7xl mx-auto md:my-4 lg:my-5 my-0 pb-12 md:pb-0`}
    >
      <div className="lg:flex shadow rounded-md">
        {/* Product */}
        <div className="lg:w-4/5">
          <div className="lg:flex">
            {/* Product Image Preview */}
            <div className="lg:flex-1 lg:w-[50%] xl:w-[90%] bg-white rounded-md lg:rounded-tl lg:rounded-bl">
              <div className="px-4 py-5 lg:px-14 product-preview lg:py-12">
                <Carousel>
                  <div>
                    <img
                      className="rounded"
                      src="/watch/1.png"
                      alt="Product Image"
                    />
                  </div>
                  <div>
                    <img
                      className="rounded"
                      src="/watch/2.jpeg"
                      alt="Product Image"
                    />
                  </div>
                  <div>
                    <img
                      className="rounded"
                      src="/watch/3.jpeg"
                      alt="Product Image"
                    />
                  </div>
                  <div>
                    <img
                      className="rounded"
                      src="/watch/4.jpeg"
                      alt="Product Image"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
            {/* Description */}
            <div className="lg:flex-1 px-4 lg:px-14 product-description py-2 bg-white">
              <div className="flex gap-2 lg:text-2xl -mt-7 lg:mt-7 justify-between">
                <h3 className="font-bold">
                  OLEVS OLV 2871 Leather Analog Watch for Men - Chocolate - KS-3
                </h3>
                <div className="mt-[2px] lg:mt-1">
                  <div className="rounded-full cursor-pointer border border-gray-400 p-1">
                    <IoShareSocialOutline
                      color="grey"
                      className="-translate-x-[1px]"
                    />
                  </div>
                </div>
              </div>
              <p className="font-light lg:text-sm text-xs py-2 opacity-75">
                SKU: OX8A6C8
              </p>
              <p className="font-light text-xs opacity-75">
                BRAND:{" "}
                <strong className="font-normal lg:text-sm">
                  Individual Collections | More Gents Watches from Individual
                  Collections
                </strong>
              </p>
              <p className="font-bold text-xl lg:text-2xl mt-2 pt-2">
                $ 1690.00
              </p>
              <p className="font-light lg:text-lg opacity-70">Starting price</p>
              <div>
                <div>
                  <label className="text-xs lg:text-sm" htmlFor="qty">
                    Quantity
                  </label>
                </div>
                <div className="mt-1">
                  <select
                    className="w-full lg:text-lg p-1 dropdown rounded-sm px-3 outline-1 outline-black border border-gray-400"
                    id="qty"
                  >
                    <option value="1">Only 1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button
                  className="flex bg-red-700 text-white py-2 rounded-sm items-center gap-2 w-full justify-center"
                  onClick={() => router.push("/auth/signin")}
                >
                  <div>
                    <HiOutlineShoppingCart />
                  </div>
                  <p className="lg:text-lg">Buy now</p>
                </button>
                <button
                  className="flex bg-black text-white py-2 rounded-sm items-center gap-2 w-full justify-center"
                  onClick={() => handleAddToCart()}
                >
                  <div>
                    <HiOutlineShoppingCart />
                  </div>
                  <p className="lg:text-lg">Add to Cart</p>
                </button>
              </div>
              <hr className="mt-3 border-gray-400" />
              <p className="text-xs lg:text-sm mt-3">
                Have questions about this product (SKU: 0x8a8c8)
              </p>
              <div className="flex items-center gap-2 text-red-700 mt-2">
                <div>
                  <FaPhoneAlt />
                </div>
                <p className="lg:text-lg">09638111666</p>
              </div>
              <hr className="my-3 border-gray-400" />
            </div>
          </div>
        </div>
        <ul className="bg-[#f5f5f7] shadow-sm lg:w-1/5 px-4 py-7 rounded-bl lg:rounded-tr rounded-br">
          <li className="font-light">
            <p>Warranty</p>
            <div className="flex mt-2 items-center gap-[5px]">
              <BsCheck2Square color="#07c041" />
              <p>100% Authentic</p>
            </div>
            <hr className="mt-2 border-gray-400" />
          </li>
        </ul>
      </div>
      <div className="my-7 rounded-md shadow">
        <div>
          <h2 className="text-lg px-4 lg:text-2xl lg:font-normal shadow-sm py-4 font-light rounded-tl rounded-tr">
            Product details of OLEVS OLV 2871 Leather Analog Watch for Men -
            Chocolate - KS-3
          </h2>
        </div>
        <div className="px-4 py-5 lg:text-base text-sm bg-white">
          <p>
            A wristwatch is desioned to be worn around the wrist. attached bu a
            watch strap or other tupe of bracelet. includino different materials
            A pocket watch is desioned for a person to carru in a pocket often
            attached to a chain It could be different model and color
          </p>
          <p className="mt-4">
            Evalu is the No 1 Banoladeshi E-commerce site Here customer can find
            their desire products and can be fulfill their needs bu ordering
            here. Ever person has a unique and significant choice. Evalu has
            come up with almost all tupes of collections considering the buvers.
            So that the can find the product of their choice and buy the
            products as well as riler erheir noods
          </p>
        </div>
        <ul className="features px-4 py-4 flex flex-col gap-1 pb-12 rounded-bl rounded-br bg-white">
          <li className="flex items-center">
            <span className="text-gray-600 flex-1">Product Type</span>
            <span className="flex-1">Watch</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex-1">Stran Matorial</span>
            <span className="flex-1">Leather</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex-1">Maument</span>
            <span className="flex-1">Quartz</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex-1">Dial Diameter</span>
            <span className="flex-1">42.5mm</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex-1">Dial Thickness</span>
            <span className="flex-1">13.5mm</span>
          </li>
          <li className="flex items-center">
            <span className="flex-1 text-blue-500">Bracelet Width</span>
            <span className="flex-1">20mm</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex-1">Water Proof</span>
            <span className="flex-1">3ATM Bar</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex-1">Weight</span>
            <span className="flex-1">49 cm</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 flex-1">Gender</span>
            <span className="flex-1">Men</span>
          </li>
        </ul>
      </div>
      <div className="mt-0 sm:mt-1 md:mt-4 lg:mt-5 pb-5">
        <section className="pt-2 md:pt-4 mb-5">
          <div className="flex items-center justify-between">
            <h4
              className="text-lg font-bold py-0.5"
              style={{
                backgroundColor: "black",
                color: "white",
                paddingLeft: "10px",
                paddingRight: "10px",
                // padding: "10px",
                borderRadius: "4px",
              }}
            >
              Related Products
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
              title="View All"
              // icon={<ArrowCircleRightOutlinedIcon fontSize="medium" />}
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
  );
}
