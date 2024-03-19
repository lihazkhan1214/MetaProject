import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../store/cartSlice";

import { inriaSans } from "../components/utils/getinriaFont";
import { useRouter } from "next/router";
import { Box, Divider, IconButton } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { TbFileDollar } from "react-icons/tb";
import DeleteIcon from "@mui/icons-material/Delete";

export default function OrderPage() {
  const [productQty, setProductQty] = useState(1);
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (cart.length > 0) {
      let totalPrice = 0;
      cart.forEach((item) => {
        totalPrice += parseInt(item.price.split(",").join("")) * item.quantity;
      });
      setTotal(totalPrice);
    }
  }, [cart]);

  const decreaseProductQtyHandler = () => {
    if (productQty > 1) {
      setProductQty((qty) => qty - 1);
    }
    return;
  };

  return (
    <>
      <Head>
        <title>Order Page</title>
      </Head>
      <div
        className={`${inriaSans.className} px-4 md:px-10 xl:px-12 max-w-7xl mx-auto flex flex-col gap-4 md:flex-row md:gap-5 lg:gap-12 mb-4  md:my-4 lg:my-5`}
      >
        <div className="flex-1">
          <div className="flex">
            <div className="mr-2 w-2 h-8 bg-[#BF1D22] rounded-r-md" />
            <h2 className="text-xl font-bold lg:text-2xl pb-2">Your Order</h2>
          </div>
          <div className="shadow rounded-md bg-white">
            <div className="px-4 pt-1">
              {/* <div className="flex bg-[#f5f5f7] px-2 py-3 rounded-md"> */}
              {/* <div className="w-[40%]">
                  <Image
                    className="w-[90%] mx-auto h-full"
                    src={"/order/enterprise.webp"}
                    alt={"Enterprise"}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="w-[60%] px-2 text-sm">
                  <p className="lg:text-xl">
                    Nipun for Cash on Delivery Service
                  </p>
                  <div className="mt-2 font-light lg:text-lg">
                    <p>* Minimum Order</p>
                    <p>
                      Amount <strong className="font-normal">500DBT</strong>
                    </p>
                  </div>
                </div> */}
              {/* </div> */}
              {cart.length === 0 ? (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    src="/cart/noData.jpg"
                    alt="No Data found"
                    component="img"
                    sx={{ width: { xs: "100%", md: "70%" } }}
                  />
                </Box>
              ) : // <Image
              //   className=" p-2 w-full h-full"
              //   src={"/cart/noData.jpg"}
              //   alt={"No Data found"}
              //   width={200}
              //   height={200}
              // />
              null}

              {cart?.map((item, index) => (
                <div>
                  <div
                    key={item?.title}
                    className="flex mt-3 px-2 pb-2 rounded-md"
                  >
                    <div className="w-[80px] flex justify-center items-center py-1 h-[90px]">
                      <Image
                        className="object-contain p-2 w-full h-full rounded-md"
                        src={item?.image}
                        alt={"Enterprise"}
                        width={45}
                        height={45}
                        style={{ border: "1px solid #F5F5F7" }}
                      />
                    </div>
                    <div className="flex-1 pl-3 text-xs lg:px-4">
                      <p className="font-bold lg:text-lg lines-2">
                        {item?.title}
                      </p>
                      <p className="font-bold mt-1 lg:text-lg">
                        ${item?.price}
                      </p>
                      <div className="flex mt-2 justify-between">
                        <div className="border lg:text-lg border-[#ccc] rounded-md px-2 py-1">
                          <button
                            onClick={() => dispatch(decrementQuantity(item.id))}
                            className="pr-3"
                          >
                            -
                          </button>
                          <span className="px-5 border-r border-l border-[#ccc]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(incrementQuantity(item?.id))
                            }
                            className="pl-3"
                          >
                            +
                          </button>
                        </div>
                        <DeleteIcon
                          style={{ cursor: "pointer", color: "gray" }}
                          onClick={() => dispatch(removeItem(item?.id))}
                        />

                        {/* <button
                        className="text-red-500 lg:text-lg"
                        onClick={() => dispatch(removeItem(item?.id))}
                      >
                        Remove
                      </button> */}
                      </div>
                    </div>
                    {/* <div>hello</div> */}
                  </div>
                  {cart.length !== index + 1 ? (
                    <hr
                      style={{
                        backgroundColor: "#D7D7D7",
                        height: "1px",
                        border: "none",
                      }}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
        {cart.length === 0 ? (
          <>
            <div className="flex-1 lg:flex-none lg:w-[40%]">
              <div className="flex">
                <div className="mr-2 w-2 h-8 bg-[#2D6B64] rounded-r-md" />
                <h2 className="text-xl font-bold lg:text-2xl pb-2">
                  Order Summary
                </h2>
              </div>
              <div className="shadow rounded-md bg-white py-6">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    style={{
                      pointerEvents: "none",
                      backgroundColor: "#F5F5F7",
                    }}
                  >
                    <TbFileDollar />
                  </IconButton>
                  <p className="font-bold">Sorry, No data found</p>
                  {/* <p className>Sorry, No product found</p> */}
                </Box>
                {/* <hr /> */}
                {/* <Divider
                orientation="horizontal"
                variant="start"
                // flexItem
                color="black"
                className="ml-5"
                style={{ marginLeft: "7px" }}
              /> */}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 lg:flex-none lg:w-[40%]">
            <div className="flex">
              <div className="mr-2 w-2 h-8 bg-[#2D6B64] rounded-r-md" />
              <h2 className="text-xl font-bold lg:text-2xl pb-2">
                Order Summary
              </h2>
            </div>
            <div className="shadow rounded-md bg-white">
              <div className="flex px-4 py-5 justify-between">
                <p className="text-blue-500 text-lg">
                  Nipun Enterprise for Cash on Delivery Service
                </p>
                <p className="min-w-[80px] text-right text-lg">
                  $ {7150 * productQty}
                </p>
              </div>
              <hr className="mx-3 border-gray-300" />
              <div className="flex px-4 items-center justify-between mt-3">
                <p>Subtotal</p>
                <p>$ {total}.00</p>
              </div>
              <div className="flex px-4 items-center justify-between mt-3">
                <p className="font-bold text-lg">Total</p>
                <p className="font-bold text-lg">$ {total}.00</p>
              </div>
              <div className="mt-4 flex justify-center pb-5">
                <button
                  className="bg-black text-white py-1.5 text-lg rounded-md items-center gap-2 w-[95%]"
                  onClick={() => router.push("/checkout")}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
