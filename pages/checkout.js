import { inriaSans } from "../components/utils/getinriaFont";
import Head from "next/head";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AddNewAddressDialog from "../components/Dialog/AddNewAddressDialog";

const arrayADDRESS = [
  {
    id: 1,
    name: "Sheikh Swin",
    contactNumber: "01699999999",
    division: "Chittagong",
    district: "Bandarban",
    subDist: "Alikadam",
    houseHold: "333",
    check: "metro",
    union: "Alkadam",
    area: "011",
    defaultChk: true,
    streetAddress: "022",
  },
  {
    id: 2,
    name: "Abdullah",
    contactNumber: "01699999999",
    division: "Chittagong",
    district: "Bandarban",
    subDist: "Alikadam",
    houseHold: "333",
    union: "Alkadam",
    defaultChk: false,
    check: "metro",
    area: "011",
    streetAddress: "022",
  },
  {
    id: 3,
    name: "Sheikh Swin",
    contactNumber: "01699999999",
    division: "Chittagong",
    district: "Bandarban",
    subDist: "Alikadam",
    check: "outside",
    union: "Alkadam",
    defaultChk: false,
    houseHold: "333",
    area: "011",
    streetAddress: "022",
  },
];

export default function CheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const [addBtn, setAddBtn] = useState(false);
  const [ADDRESS, setADDRESS] = useState(arrayADDRESS);

  const handleAddOpen = () => {
    setAddBtn(!addBtn);
  };

  useEffect(() => {
    if (cart.length > 0) {
      let totalPrice = 0;
      cart.forEach((item) => {
        totalPrice += parseInt(item.price.split(",").join("")) * item.quantity;
      });
      setTotal(totalPrice);
    } else {
      setTotal(0);
    }
  }, [cart]);

  return (
    <div>
      <div>
        <Head>
          <title>Order Page</title>
        </Head>
        <div
          className={`${inriaSans.className} flex flex-col-reverse md:flex-row  gap-4 px-4 md:px-10 xl:px-12 max-w-7xl mx-auto md:gap-5 lg:gap-12 mb-4  md:my-4 lg:my-5`}
        >
          <div className="flex-1">
            <div className="flex">
              <div className="mr-2 w-2 h-8 bg-[#BF1D22] rounded-r-md" />
              <h2 className="text-xl font-bold lg:text-2xl pb-2">Your Order</h2>
            </div>

            <div className="shadow rounded-md bg-white">
              <div className="px-4 py-5">
                <div>
                  <p>Address</p>
                  <div className="mt-2 flex flex-col lg:items-center lg:flex-row gap-3">
                    <div className="flex-1">
                      <select
                        className="w-full lg:text-lg p-1 dropdown rounded-sm px-3 outline-1 outline-black border bg-[#ccc] border-gray-400"
                        id="qty"
                        onChange={(e) => {
                          setSelectedAddress(e.target.value);
                        }}
                        value={selectedAddress}
                      >
                        {ADDRESS.map((address, index) => (
                          <option key={index} value={index}>
                            {`${address.area}, ${address.union}, ${address.subDist}, ${address.district},${address.division}`}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={handleAddOpen}
                      className="flex w-full lg:w-[40%] bg-red-600 text-white py-[6px] rounded-md items-center gap-2 justify-center"
                    >
                      <div>
                        <AiOutlinePlusCircle />
                      </div>
                      <p className="lg:text-lg">Add New address</p>
                    </button>
                  </div>
                  <div className="flex bg-[#f5f5f7] border border-[#ccc] mt-3 px-2 py-[10px] rounded">
                    {/* {`${ADDRESS[selectedAddress].name}`} */}
                    {`${ADDRESS[selectedAddress].area}, ${ADDRESS[selectedAddress].union}, ${ADDRESS[selectedAddress].subDist}, ${ADDRESS[selectedAddress].district},${ADDRESS[selectedAddress].division}`}
                  </div>
                  <div className="mt-3">
                    <p>Contact Number</p>
                    <div>
                      <input
                        type="text"
                        className="border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                        placeholder="04336436364"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <p>
                      For this order these{" "}
                      <strong className="text-red-600">Order Policy</strong>{" "}
                      applicable
                    </p>
                    <p className="my-3">
                      Price included VAT for VAT applicable products
                    </p>
                    <div className="flex gap-2">
                      <div>
                        <input
                          className="mt-2 lg:mt-0"
                          id="tc"
                          type="checkbox"
                        />
                      </div>
                      <label htmlFor="tc" className="cursor-pointer">
                        I agree to the{" "}
                        <strong className="text-red-600">
                          Terms & Conditions
                        </strong>{" "}
                        and{" "}
                        <strong className="text-red-600">
                          Purchasing Policy
                        </strong>{" "}
                        of Meta
                      </label>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      className="flex bg-[#f3ceb0] border border-black py-2 rounded-md items-center gap-2 w-full justify-center"
                      onClick={() => router.back()}
                    >
                      <div>
                        <BiArrowBack />
                      </div>
                      <p className="lg:text-lg">GO BACK</p>
                    </button>
                    <button className="flex bg-gray-500 border border-black text-white py-2 rounded-md items-center gap-2 w-full justify-center">
                      <p className="lg:text-lg">Confirm Order</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 md:flex-none md:w-[40%]">
            <div className="flex">
              <div className="mr-2 w-2 h-8 bg-[#2D6B64] rounded-r-md" />
              <h2 className="text-xl font-bold lg:text-2xl pb-2">
                Order Summary
              </h2>
            </div>
            <div className="shadow rounded-md bg-white">
              <div className="flex px-4 py-5 justify-between">
                <p className="text-blue-500 text-lg">
                  Nipun Enterprise for Cash on Delivery Serice
                </p>
                <p className="min-w-[80px] text-right text-lg">$ 7150</p>
              </div>
              <hr className="mx-3 border-gray-300" />
              <div className="flex px-4 items-center justify-between mt-3">
                <p>Subtotal</p>
                <p>$ {total}</p>
              </div>
              <div className="flex px-4 items-center justify-between pb-5 mt-3">
                <p className="font-bold text-lg">Total</p>
                <p className="font-bold text-lg">$ {total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddNewAddressDialog
        open={addBtn}
        handleClose={handleAddOpen}
        setADDRESS={setADDRESS}
      />
    </div>
  );
}
