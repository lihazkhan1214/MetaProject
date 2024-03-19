import {
  Avatar,
  Box,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  NoSsr,
  Pagination,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { BsCheck2Circle } from "react-icons/bs";
import { RxReload } from "react-icons/rx";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TransactionsPage } from "../../components/profile";
import { inriaSans } from "../../components/utils/getinriaFont";
import EditAddress from "../../components/forms/EditAddress";
import AddNewAddress from "../../components/forms/AddNewAddress";
import { FiPieChart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { RiRefundLine } from "@react-icons/all-files/ri/RiRefundLine";
import { FiKey } from "@react-icons/all-files/fi/FiKey";
import { AiOutlineCalendar } from "@react-icons/all-files/ai/AiOutlineCalendar";
import { BsArrowDownUp } from "react-icons/bs";
import { BiListUl } from "@react-icons/all-files/bi/BiListUl";
const SIDEBAR_MENU = [
  {
    title: "Basic Informations",
    href: "basic-informations",
    icon: AiOutlineUser,
  },
  { title: "Addresses", href: "addresses", icon: CiLocationOn },
  { title: "Orders", href: "orders", icon: BiListUl },
  { title: "Unconfirmed Orders", href: "unconfirmed-orders", icon: BiListUl },
  { title: "Reviews", href: "reviews", icon: FiPieChart },
  {
    title: "Refund Settlements",
    href: "refund-settlements",
    icon: RiRefundLine,
  },
  { title: "Change Password", href: "change-password", icon: FiKey },
  { title: "Appointment", href: "appointment", icon: AiOutlineCalendar },
  { title: "Transactions", href: "transactions", icon: BsArrowDownUp },
];

const renderIcon = (icon, index) => {
  const Icon = icon;
  return (
    <div className="y" key={index}>
      <Icon />
    </div>
  );
};

export default function ProfilePage() {
  const [isMobileMenuClicked, setIsMobileMenuClicked] = useState("");
  const [desktopSelectedMenu, setDesktopSelectedMenu] =
    useState("basic-informations");
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <NoSsr>
        <div
          className={`${inriaSans.className} px-3 md:px-10 xl:px-12 max-w-7xl mx-auto md:my-4 lg:my-5 my-1 mb-4 flex md:gap-4 pb-14 md:pb-0`}
        >
          <div className="flex-1 md:max-w-[41%] lg:max-w-[30%]">
            <div className="w-full md:hidden rounded-md shadow bg-white">
              <div className="p-5 pb-3 mt-1">
                <div className="flex gap-5 pt-5 md:flex-col">
                  <div>
                    <Avatar
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 100, height: 100 }}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-2xl flex items-center gap-2">
                      <p>Sheikh Swim</p>
                      <div>
                        <BsCheck2Circle color="green" />
                      </div>
                    </div>
                    <p className="font-light text-lg mt-[1px]">01834419585</p>
                    <div className="mt-1">
                      <button className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-2xl hover:bg-green-700">
                        <RxReload />
                        <span>Check Account</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="flex justify-between text-lg">
                    <p>Bronze</p>
                    <p>Silver</p>
                  </div>
                  <div>
                    <div className="h-2 bg-[#bdbdbd] rounded-xl my-2" />
                  </div>
                  <p className="text-right text-lg">0/100000</p>
                </div>
              </div>
              <ul className="pb-8">
                {SIDEBAR_MENU.map((menuItem, index) => (
                  <li
                    style={{
                      borderColor:
                        isMobileMenuClicked === menuItem.title ? "black" : "",
                      background:
                        isMobileMenuClicked === menuItem.title
                          ? "rgba(0, 0, 0, 0.04)"
                          : "white",
                      color:
                        isMobileMenuClicked === menuItem.title ? "black" : "",
                    }}
                    onClick={() => {
                      setIsMobileMenuClicked(menuItem.title);
                      setTimeout(() => {
                        router.push(`/profile/${menuItem.href}`);
                      }, 500);
                    }}
                    className={`text-gray-600 flex flex-row items-center pl-4 py-3 text-lg border-l-[5px] border-white`}
                    key={menuItem.title}
                  >
                    {renderIcon(menuItem.icon, index)}
                    <p className="pl-4">{menuItem.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-full hidden md:block rounded-md shadow bg-white">
              <div className="p-5 pb-3">
                <div className="flex gap-5 pt-5 items-center md:flex-col">
                  <div>
                    <Avatar
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 100, height: 100 }}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-2xl flex items-center gap-2">
                      <p>Sheikh Swim</p>
                      <div>
                        <BsCheck2Circle color="green" />
                      </div>
                    </div>
                    <p className="font-light text-center text-lg mt-[1px]">
                      01834419585
                    </p>
                    <div className="mt-1">
                      <button className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-2xl hover:bg-green-700">
                        <RxReload />
                        <span>Check Account</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="flex justify-between text-lg">
                    <p>Bronze</p>
                    <p>Silver</p>
                  </div>
                  <div>
                    <div className="h-2 bg-[#bdbdbd] rounded-xl my-2" />
                  </div>
                  <p className="text-right text-lg">0/100000</p>
                </div>
              </div>
              <ul className="pb-8">
                {SIDEBAR_MENU.map((menuItem, index) => (
                  <li
                    style={{
                      borderColor:
                        desktopSelectedMenu === menuItem.href ? "black" : "",
                      background:
                        desktopSelectedMenu === menuItem.href
                          ? "rgba(0, 0, 0, 0.04)"
                          : "white",
                    }}
                    onClick={() => {
                      setDesktopSelectedMenu(menuItem.href);
                    }}
                    className={`text-gray-600 cursor-pointer flex flex-row items-center pl-4 py-3 text-lg border-l-[5px] border-white`}
                    key={menuItem.title}
                  >
                    {renderIcon(menuItem.icon, index)}
                    <p className="pl-4">{menuItem.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-md flex-1 hidden md:block">
            {desktopSelectedMenu === SIDEBAR_MENU[0].href && (
              <BasicInformationMenuPage />
            )}
            {desktopSelectedMenu === SIDEBAR_MENU[1].href && <AddressesPage />}
            {desktopSelectedMenu === SIDEBAR_MENU[2].href && <OrdersPage />}
            {desktopSelectedMenu === SIDEBAR_MENU[8].href && (
              <TransactionsPage />
            )}
          </div>
        </div>
      </NoSsr>
    </>
  );
}

export const BasicInformationMenuPage = (props) => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [parentInfoOpen, setParentInfoOpen] = useState(false);
  const [primaryEmailOpen, setPrimaryEmailOpen] = useState(false);
  const [evalyNumber, setEvalyNumber] = useState(null);
  const [firstName, setFirstName] = useState("Sheikh");
  const [lastName, setLastName] = useState("Swim");
  const [contactNumber, setContactNumber] = useState("01834419585");
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState(null);
  const [memberSince, setMemberSince] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [fatherName, setFatherName] = useState(null);
  const [fatherNumber, setFatherNumber] = useState(null);
  const [motherName, setMotherName] = useState(null);
  const [motherNumber, setMotherNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [otherEmail, setOtherEmail] = useState(null);

  const handleClickOpen = () => {
    setInfoOpen(!infoOpen);
  };

  const handleParentDialogClickOpen = () => {
    setParentInfoOpen(!parentInfoOpen);
  };

  const handleEmailDialogClickOpen = () => {
    setPrimaryEmailOpen(!primaryEmailOpen);
  };

  return (
    <div className="bg-white rounded-md p-4 md:px-14 md:py-5">
      <p className="text-base md:text-xl text-gray-500">
        <strong className="text-xl md:text-2xl text-black mr-4">
          Basic Information
        </strong>
        Enter your basic information for ensuring security and recovery of your
        account.
      </p>
      <hr className="my-4 border-gray-400 md:my-5" />
      <div className="flex items-start justify-start mt-7 gap-3 md:mt-14 md:gap-7">
        <div className="flex">
          <div className="bg-black flex rounded-full justify-center items-center p-3 md:p-5">
            <TextSnippetOutlinedIcon className="text-white" sx={{ scale: 2 }} />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex text-md md:text-xl items-center lg:text-2xl justify-between">
            <p>PERSONAL INFORMATION</p>
            {infoOpen == false ? (
              <button
                onClick={handleClickOpen}
                className="text-gray-500 border text-base px-2 py-1 md:px-3 md:py-2 shadow-sm rounded-md hover:text-black hover:bg-[rgb(0,0,0,0.02)]"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={handleClickOpen}
                className="text-gray-500 border text-base px-2 py-1 md:px-3 md:py-2 shadow-sm rounded-md hover:text-black hover:bg-[rgb(0,0,0,0.02)]"
              >
                Save
              </button>
            )}
          </div>
          <div className="h-1 md:h-2 mt-4 bg-[rgb(0,0,0,0.1)] rounded-sm">
            <div className="w-[40%] h-full bg-[#ccc]"></div>
          </div>
          <ul className="mt-5 md:mt-10 flex flex-col gap-2 md:gap-3">
            {infoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Meta Number:</span>
                <span className="flex-1 text-gray-500">
                  {evalyNumber == null ? "N/A" : evalyNumber}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Meta Number:</span>
                <input
                  type="text"
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                  placeholder="04336436364"
                  value={evalyNumber}
                  onChange={(e) => setEvalyNumber(e.target.value)}
                />
              </li>
            )}
            {infoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Full Name:</span>
                <span className="flex-1 text-gray-500">
                  {firstName == null ? "N/A" : firstName}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Full Name:</span>
                <input
                  type="text"
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </li>
            )}
            {/* {infoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Last Name:</span>
                <span className="flex-1 text-gray-500">
                  {lastName == null ? "N/A" : lastName}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Last Name:</span>
                <input
                  type="text"
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </li>
            )} */}
            {infoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Contact Number:</span>
                <span className="flex-1 text-gray-500">
                  {contactNumber == null ? "N/A" : contactNumber}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Contact Number:</span>
                <input
                  type="text"
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                  placeholder="04336436364"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </li>
            )}
            {infoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Gender:</span>
                <span className="flex-1 text-gray-500">
                  {gender == null ? "N/A" : gender}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Gender:</span>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  on
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                >
                  <option selected>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </li>
            )}
            {infoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Date of Birth:</span>
                <span className="flex-1 text-gray-500">
                  {dob == null ? "N/A" : dob}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Date of Birth:</span>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                />
              </li>
            )}

            {infoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Member Since:</span>
                <span className="flex-1 text-gray-500">
                  {memberSince == null ? "N/A" : memberSince}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Member Since:</span>
                <input
                  type="date"
                  value={memberSince}
                  onChange={(e) => setMemberSince(e.target.value)}
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                />
              </li>
            )}
            {infoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Organization:</span>
                <span className="flex-1 text-gray-500">
                  {organization == null ? "N/A" : organization}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Organization:</span>
                <input
                  type="text"
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                  placeholder="Organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </li>
            )}
            {infoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Occupation:</span>
                <span className="flex-1 text-gray-500">
                  {occupation == null ? "N/A" : occupation}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Occupation:</span>
                <input
                  type="text"
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                  placeholder="Occupation"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex items-start justify-start mt-7 md:mt-14 gap-3 md:gap-7">
        <div className="flex">
          <div className="bg-black flex rounded-full justify-center items-center p-3 md:p-5">
            <PeopleAltOutlinedIcon className="text-white" sx={{ scale: 2 }} />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex text-md md:text-xl items-center lg:text-2xl justify-between">
            <p>PARENTS INFORMATION</p>
            {parentInfoOpen == false ? (
              <button
                onClick={handleParentDialogClickOpen}
                className="text-gray-500 border text-base px-2 py-1 md:px-3 md:py-2 shadow-sm rounded-md hover:text-black hover:bg-[rgb(0,0,0,0.02)]"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={handleParentDialogClickOpen}
                className="text-gray-500 border text-base px-2 py-1 md:px-3 md:py-2 shadow-sm rounded-md hover:text-black hover:bg-[rgb(0,0,0,0.02)]"
              >
                Save
              </button>
            )}
          </div>
          <div className="h-1 md:h-2 mt-4 bg-[rgb(0,0,0,0.1)] rounded-sm">
            <div className="w-[40%] h-full bg-[#ccc]"></div>
          </div>
          <ul className="mt-5 md:mt-10 flex flex-col gap-3">
            {parentInfoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Father's Info:</span>
                <span className="flex-1 text-gray-500">
                  {fatherName == null ? "N/A" : fatherName}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Father's Info:</span>
                <input
                  type="text"
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                  placeholder="Father's Info"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </li>
            )}
            {parentInfoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Father's Phone No:</span>
                <span className="flex-1 text-gray-500">
                  {fatherNumber == null ? "N/A" : fatherNumber}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Father's Phone No:</span>
                <input
                  type="text"
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                  placeholder="Father's Phone No"
                  value={fatherNumber}
                  onChange={(e) => setFatherNumber(e.target.value)}
                />
              </li>
            )}
            {parentInfoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Mother's Info:</span>
                <span className="flex-1 text-gray-500">
                  {motherName == null ? "N/A" : motherName}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Mother's Info:</span>
                <input
                  type="text"
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                  placeholder="Mother's Info"
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                />
              </li>
            )}
            {parentInfoOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Mother's Phone No:</span>
                <span className="flex-1 text-gray-500">
                  {motherNumber == null ? "N/A" : motherNumber}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Mother's Phone No:</span>
                <input
                  type="text"
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                  placeholder="Mother's Phone No"
                  value={motherNumber}
                  onChange={(e) => setMotherNumber(e.target.value)}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex items-start justify-start mt-7 gap-3 md:mt-14 md:gap-7 mb-12">
        <div className="flex">
          <div className="bg-black flex rounded-full justify-center items-center p-3 md:p-5">
            <MailOutlineOutlinedIcon className="text-white" sx={{ scale: 2 }} />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex text-md md:text-xl items-center lg:text-2xl justify-between">
            <p className="flex flex-col">
              <span>EMAIL ADDRESS</span>
              <span className="text-sm md:text-base text-gray-500">
                The email address to which all the notification will be sent.
              </span>
            </p>
            {primaryEmailOpen == false ? (
              <button
                onClick={handleEmailDialogClickOpen}
                className="text-gray-500 border text-base px-2 py-1 md:px-3 md:py-2 shadow-sm rounded-md hover:text-black hover:bg-[rgb(0,0,0,0.02)]"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={handleEmailDialogClickOpen}
                className="text-gray-500 border text-base px-2 py-1 md:px-3 md:py-2 shadow-sm rounded-md hover:text-black hover:bg-[rgb(0,0,0,0.02)]"
              >
                Save
              </button>
            )}
          </div>
          <div className="h-1 md:h-2 mt-4 bg-[rgb(0,0,0,0.1)] rounded-sm">
            <div className="w-[40%] h-full bg-[#ccc]"></div>
          </div>
          <ul className="mt-5 md:mt-10 flex flex-col gap-3">
            {primaryEmailOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Primary Email:</span>
                <span className="flex-1 text-gray-500">
                  {email == null ? "N/A" : email}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Primary Email:</span>
                <input
                  type="email"
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                  placeholder="Primary Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
            )}
            {primaryEmailOpen == false ? (
              <li className="flex text-base md:text-lg lg:text-xl">
                <span className="flex-1">Other:</span>
                <span className="flex-1 text-gray-500">
                  {otherEmail == null ? "N/A" : otherEmail}
                </span>
              </li>
            ) : (
              <li className="flex flex-col text-base md:text-lg lg:text-xl">
                <span className="flex-1">Other:</span>
                <input
                  type="email"
                  className="flex-1 border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                  placeholder="Other Email"
                  value={otherEmail}
                  onChange={(e) => setOtherEmail(e.target.value)}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* <PersonalInfoDialog open={infoOpen} handleClose={handleClose} /> */}
      {/* <ParentInfoDialog
        open={parentInfoOpen}
        handleClose={handleParentDialogClose}
      /> */}
      {/* <EmailPrimaryDialog
        open={primaryEmailOpen}
        handleClose={handleEmailDialogClose}
      /> */}
    </div>
  );
};

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
export const AddressesPage = (props) => {
  const [editBtn, setEditBtn] = useState(false);
  const [addBtn, setAddBtn] = useState(false);
  const [ADDRESS, setADDRESS] = useState(arrayADDRESS);
  const [object, setObject] = useState(null);

  const handleEditOpen = () => {
    setEditBtn(!editBtn);
  };
  const handleAddOpen = () => {
    setAddBtn(!addBtn);
  };

  const handleSwitchChange = (event, id) => {
    const addressIndex = ADDRESS.findIndex((address) => address.id === id);
    const updatedAddress = [...ADDRESS];

    if (event.target.checked) {
      // set the defaultChk property to true for the selected object
      updatedAddress.forEach((address) => {
        address.defaultChk = false;
      });
      updatedAddress[addressIndex].defaultChk = true;
    } else {
      // set the defaultChk property to false for the selected object
      updatedAddress[addressIndex].defaultChk = false;
    }

    setADDRESS(updatedAddress);
  };

  return (
    <div style={{ paddingTop: "15px" }}>
      {addBtn === false && editBtn === false ? (
        <div className="bg-white md:h-full rounded-md p-4 md:px-14 md:py-5">
          <div className="flex flex-row justify-between">
            <h2 className="text-xl font-bold lg:text-2xl pb-2">Address</h2>
            <button
              onClick={handleAddOpen}
              className="flex md:px-6 w-[60%] lg:w-[40%] bg-red-600 text-white py-[6px] rounded-md items-center gap-2 justify-center"
            >
              <div>
                <AiOutlinePlusCircle />
              </div>
              <p className="lg:text-lg">Add New address</p>
            </button>
          </div>
          <hr className="my-4 border-gray-400 md:my-5" />
          {ADDRESS.map((res, index) => (
            <ul className="mt-7">
              <li className="text-gray-500">
                <p className="text-lg text-black font-bold md:text-xl">
                  {res.name}
                </p>
                <p>{res.contactNumber}</p>
                <p>{`${res.houseHold}, ${res.streetAddress}`}</p>
                {res.check == "outside" ? (
                  <p>{`${res.area}, ${res.union}, ${res.subDist}, ${res.district},${res.division}`}</p>
                ) : (
                  <p>{`${res.area}, ${res.subDist}, ${res.district},${res.division}`}</p>
                )}
                <div style={{ marginBottom: "-8px" }}>
                  <IconButton
                    onClick={() => {
                      setObject(res);
                      handleEditOpen();
                    }}
                  >
                    <TbEdit />
                  </IconButton>
                  <IconButton>
                    <MdDelete />
                  </IconButton>
                </div>
                <div>
                  <Switch
                    sx={{ marginLeft: -1 }}
                    name="defaultChk"
                    checked={res.defaultChk}
                    onChange={(event) => handleSwitchChange(event, res.id)}
                  />
                </div>
                <hr className="my-2 border-gray-400 md:my-3" />
              </li>
            </ul>
          ))}
          {/* <NewAddressDialog open={infoOpen} handleClose={handleClose} /> */}
        </div>
      ) : editBtn === true ? (
        <EditAddress
          object={object}
          ADDRESS={ADDRESS}
          setADDRESS={setADDRESS}
          handleEditOpen={handleEditOpen}
        />
      ) : (
        addBtn == true && (
          <AddNewAddress
            ADDRESS={ADDRESS}
            setADDRESS={setADDRESS}
            handleAddOpen={handleAddOpen}
          />
        )
      )}
    </div>
  );
};

export const OrdersPage = (props) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="bg-white rounded-md p-4 pb-7 md:px-14 md:py-5">
      <p className="text-base md:text-xl text-gray-500">
        <strong className="text-xl md:text-2xl text-black mr-4">Orders</strong>
        Your order history in meta
      </p>
      <hr className="my-4 border-gray-400 md:my-5" />
      <div className="shadow rounded-md pt-4">
        <div className="flex w-full justify-center items-center gap-1 md:gap-7">
          <TextField
            size="small"
            sx={{ width: "50%", outline: "black" }}
            className="px-2"
            type={"text"}
            autoComplete="off"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon color="inherit" />
                </InputAdornment>
              ),
            }}
          />
          <FormControl sx={{ m: 1, minWidth: 140, width: "30%" }} size="small">
            <InputLabel id="demo-select-small">Filter</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={filter}
              label="Filter"
              onChange={handleFilterChange}
            >
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={20}>Unpaid</MenuItem>
              <MenuItem value={30}>Paid</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <InvoicesWidget />
        </div>
      </div>
    </div>
  );
};

const InvoicesWidget = (props) => {
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const [noOfPages] = useState(Math.ceil(invoicesData.length / itemsPerPage));

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <section className="pb-3">
      <div>
        <div className="flex justify-between text-center gap-2 text-sm lg:text-base font-semibold text-black items-center px-4 py-3">
          <p className="flex-1">Order</p>
          <p className="flex-1">Order Date</p>
          <p className="flex-1">Amount</p>
          <p className="flex-1">Payment</p>
          <p className="flex-1">Status</p>
        </div>
        <List dense component="span">
          {invoicesData
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((projectItem) => {
              return (
                <ListItem
                  key={projectItem.invoiceId}
                  button
                  onClick={() => {}}
                  sx={{ padding: "3px 0px", borderBottom: "1px solid #ccc" }}
                >
                  <div className="w-full text-center flex items-center justify-between gap-2 text-sm px-4 py-3">
                    <p className="flex-1 text-sky-500">
                      #{projectItem.invoiceId}
                    </p>
                    <p className="flex-1">{projectItem.date}</p>
                    <p className="flex-1">${projectItem.amount}</p>
                    <div className="flex-1 flex justify-center items-center">
                      <p
                        className={`
                                             uppercase px-[7px] lg:px-3 lg:py-1 text-[12px] lg:text-xs rounded-full ${
                                               projectItem.status === "pending"
                                                 ? "text-red-700 bg-red-200"
                                                 : projectItem.status ===
                                                   "completed"
                                                 ? "text-green-700 bg-green-200"
                                                 : "text-red-700 bg-red-200"
                                             }`}
                      >
                        {projectItem.status === "completed"
                          ? "PAID"
                          : projectItem.status === "pending"
                          ? "UNPAID"
                          : projectItem.status === "cancelled"
                          ? "UNPAID"
                          : "PAID"}
                      </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                      <p
                        className={`
                                             uppercase px-[7px] lg:px-3 lg:py-1 text-[12px] lg:text-xs rounded-full ${
                                               projectItem.status === "pending"
                                                 ? "text-red-700 bg-red-200"
                                                 : projectItem.status ===
                                                   "completed"
                                                 ? "text-green-700 bg-green-200"
                                                 : "text-red-700 bg-red-200"
                                             }`}
                      >
                        {projectItem.status === "completed" ? "DONE" : "CANCEL"}
                      </p>
                    </div>
                  </div>
                </ListItem>
              );
            })}
        </List>
      </div>
      <div className="flex items-center pt-2 justify-center">
        <Box component="span">
          <Pagination
            size="small"
            count={noOfPages}
            page={page}
            onChange={handleChange}
            defaultPage={1}
            classes={{ ul: "paginator" }}
          />
        </Box>
      </div>
    </section>
  );
};

const invoicesData = [
  {
    invoiceId: 4985,
    projectName: "score",
    amount: 79521,
    date: "Sept 18",
    status: "completed",
  },
  {
    invoiceId: 5984,
    projectName: "score",
    amount: 79521,
    date: "Sept 17",
    status: "pending",
  },
  {
    invoiceId: 1553,
    projectName: "score",
    amount: 79521,
    date: "Sept 16",
    status: "completed",
  },
  {
    invoiceId: 1623,
    projectName: "score",
    amount: 79521,
    date: "Sept 15",
    status: "completed",
  },
  {
    invoiceId: 1735,
    projectName: "score",
    amount: 79521,
    date: "Sept 14",
    status: "completed",
  },
  {
    invoiceId: 1853,
    projectName: "score",
    amount: 79521,
    date: "Sept 13",
    status: "cancelled",
  },
  {
    invoiceId: 1955,
    projectName: "Marathon",
    amount: 79521,
    date: "Sept 12",
    status: "pending",
  },
  {
    invoiceId: 2053,
    projectName: "TestProject",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 24,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 25,
    projectName: "manu",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 26,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 27,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 28,
    projectName: "123",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 29,
    projectName: "1234",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 30,
    projectName: "Sample",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 31,
    projectName: "1",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 32,
    projectName: "1",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 33,
    projectName: "2",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 34,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 35,
    projectName: "TestProject2",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 36,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 37,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 38,
    projectName: "AWS ",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 39,
    projectName: "AWS TEST",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 40,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 41,
    projectName: "hahj",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 42,
    projectName: "hahj",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 44,
    projectName: "nnaj",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 46,
    projectName: "Best Western",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 50,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 51,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 52,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 53,
    projectName: "sample",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 54,
    projectName: "ABC",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 56,
    projectName: "sample project",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 57,
    projectName: "XYZProject",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 58,
    projectName: "test",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 59,
    projectName: "b",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 60,
    projectName: "test",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 61,
    projectName: "SAMPLE",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 62,
    projectName: "SAMPLE",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 63,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 64,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 65,
    projectName: "TestRandom",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 66,
    projectName: "RandomProjectName",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 67,
    projectName: "test",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 68,
    projectName: "Best Western International",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 69,
    projectName: "a",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 70,
    projectName: "RandomProjectName",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 71,
    projectName: "SecretProject",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 77,
    projectName: "score",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 79,
    projectName: "RandomProjectName2",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 80,
    projectName: "RandomProjectName2",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 82,
    projectName: "YetAnotherRandomProject",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 84,
    projectName: "Test Project 2",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 96,
    projectName: "CannotStopWithRandomProjects",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 111,
    projectName: "S.H.I.E.L.D",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 113,
    projectName: "Avengers",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 114,
    projectName: "Justice League",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 124,
    projectName: "TestProject",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 126,
    projectName: "Justice League",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 127,
    projectName: "Test Project",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
  {
    invoiceId: 133,
    projectName: "test project",
    amount: 79521,
    date: "Sept 19",
    status: "pending",
  },
];
