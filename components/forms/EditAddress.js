import { IconButton } from "@mui/material";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { toast } from "react-toastify";

export default function EditAddress({ object, ADDRESS, handleEditOpen }) {
  const [firstName, setFirstName] = useState(object.name);
  const [lastName, setLastName] = useState(null);
  const [contactNumber, setContactNumber] = useState(object.contactNumber);
  const [division, setDivision] = useState(object.division);
  const [union, setUnion] = useState(object.union);
  const [district, setDistrict] = useState(object.district);
  const [subDistrict, setSubDistrict] = useState(object.subDist);
  const [houseHolding, setHouseHolding] = useState(object.houseHold);
  const [area, setArea] = useState(object.area);
  const [streetAddress, setStreetAddress] = useState(object.streetAddress);
  // City or Town Radio Button
  const [radio, setRadio] = useState("metro");

  const handleSubmit = () => {
    let objIndex = ADDRESS.findIndex((obj) => obj.id == object.id);
    ADDRESS[objIndex].name = `${firstName} ${lastName}`;
    ADDRESS[objIndex].contactNumber = contactNumber;
    ADDRESS[objIndex].check = radio;
    ADDRESS[objIndex].division = division;
    ADDRESS[objIndex].district = district;
    ADDRESS[objIndex].subDist = subDistrict;
    ADDRESS[objIndex].houseHold = houseHolding;
    ADDRESS[objIndex].area = area;
    ADDRESS[objIndex].streetAddress = streetAddress;
    ADDRESS[objIndex].union = union;
  };
  return (
    <div
      className="ml-0.6 mr-0.6 rounded-md"
      style={{ backgroundColor: "white" }}
    >
      <div className="p-3 flex flex-row flex-wrap text-lg md:text-xl items-center lg:text-2xl justify-between">
        <IconButton onClick={handleEditOpen}>
          <BsArrowLeft />
        </IconButton>
        <p>Update Address</p>
        <button
          onClick={() => {
            handleSubmit();
            toast("update Address", {
              position: "bottom-center",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            handleEditOpen();
          }}
          className="text-gray-500 border text-base px-2 py-1 md:px-3 md:py-2 shadow-sm rounded-md hover:text-black hover:bg-[rgb(0,0,0,0.02)]"
        >
          Edit
        </button>
      </div>
      <div className="h-1 md:h-2 mt-4 bg-[rgb(0,0,0,0.1)] rounded-sm">
        <div className="w-[40%] h-full bg-[#ccc]"></div>
      </div>
      <ul className="p-6 flex flex-col gap-2 md:gap-3">
        <li className="flex flex-col flex-coltext-base md:text-lg lg:text-xl">
          <span className="flex-1">Full Name:</span>
          <input
            type="text"
            value={firstName}
            className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
            placeholder="Full Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </li>
        {/* <li className="flex flex-col text-base md:text-lg lg:text-xl">
          <span className="flex-1">Last Name:</span>
          <input
            type="text"
            value={lastName}
            className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </li> */}
        <li className="flex flex-col text-base md:text-lg lg:text-xl">
          <span className="flex-1">Contact Number:</span>
          <input
            type="text"
            value={contactNumber}
            className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
            placeholder="04336436364"
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </li>
        <li className="flex text-base md:text-lg lg:text-xl py-2">
          <div class="flex">
            <div class="flex items-center mr-4">
              <input
                id="inline-radio"
                type="radio"
                value="metro"
                checked={radio === "metro"}
                onChange={(e) => setRadio(e.target.value)}
                name="inline-radio-group"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="inline-radio"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Metropolitan City
              </label>
            </div>
            <div class="flex items-center mr-4">
              <input
                id="inline-2-radio"
                type="radio"
                checked={radio === "outside"}
                onChange={(e) => setRadio(e.target.value)}
                value="outside"
                name="inline-radio-group"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="inline-2-radio"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Outside Town
              </label>
            </div>
          </div>
        </li>
        <li className="flex flex-col text-base md:text-lg lg:text-xl">
          <span className="flex-1">Division:</span>
          <select
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
          >
            <option selected>Select Division</option>
            <option value="Division">Division</option>
            <option value="Division">Division</option>
          </select>
        </li>
        <li className="flex flex-col text-base md:text-lg lg:text-xl">
          <span className="flex-1">District:</span>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
          >
            <option selected>Select District</option>
            <option value="District">District</option>
            <option value="District">District</option>
          </select>
        </li>
        <li className="flex flex-col text-base md:text-lg lg:text-xl">
          <span className="flex-1">Sub-district (Upazilla):</span>
          <select
            value={subDistrict}
            onChange={(e) => setSubDistrict(e.target.value)}
            className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
          >
            <option selected>Select Sub-district (Upazilla)</option>
            <option value="Sub-district">Sub-district</option>
            <option value="Sub-district">Sub-district</option>
          </select>
        </li>
        {radio === "metro" ? null : (
          <li className="flex flex-col text-base md:text-lg lg:text-xl">
            <span className="flex-1">Union:</span>
            <select
              value={union}
              onChange={(e) => setUnion(e.target.value)}
              className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
            >
              <option selected>Select Union</option>
              <option value="Union">Union</option>
              <option value="Union">Union</option>
            </select>
          </li>
        )}
        <li className="flex flex-col text-base md:text-lg lg:text-xl">
          <span className="flex-1">House/Holding:</span>
          <input
            type="text"
            value={houseHolding}
            className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
            placeholder="Enter House/Holding"
            onChange={(e) => setHouseHolding(e.target.value)}
          />
        </li>
        <li className="flex flex-col text-base md:text-lg lg:text-xl">
          <span className="flex-1">Area:</span>
          <input
            type="text"
            value={area}
            className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
            placeholder="Enter Area"
            onChange={(e) => setArea(e.target.value)}
          />
        </li>
        <li className="flex flex-col text-base md:text-lg lg:text-xl">
          <span className="flex-1">Street Address:</span>
          <input
            type="text"
            value={streetAddress}
            className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
            placeholder="Enter Street Address"
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </li>
      </ul>
    </div>
  );
}
