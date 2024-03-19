import React, { Component, useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
const DotsTabletMenu = dynamic(() => import("./ui/options-menu"), {
  ssr: false,
});
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MobileFriendlyOutlinedIcon from "@mui/icons-material/MobileFriendlyOutlined";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { BsBucket } from "react-icons/bs";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StoreIcon from "@mui/icons-material/Store";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { EvalyLogo } from "./icons/logo";
import { inriaSans } from "./utils/getinriaFont";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import { HiMenuAlt2 } from "react-icons/hi";
import CloseIcon from "@mui/icons-material/Close";
import { Icon as IconifyIcon } from "@iconify/react";

import {
  Box,
  Collapse,
  Divider,
  Drawer,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import CategoriesMenu from "./common/CategoriesMenu";
import MenuButton from "./common/MenuButton";

import SearchBar from "./search-bar";
import NavbarButtonsMain from "./navbarButtonsMain";
import CartMenuWeb from "./cart/CartMenuWeb";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import userIcon from "@iconify/icons-lucide/user";

const Icon = ({ iconName }) => {
  return (
    <>
      <IconifyIcon
        className="block lg:hidden"
        icon={iconName}
        width={20}
        height={19}
        color="inherit"
      />
      <IconifyIcon
        className="hidden lg:block"
        icon={iconName}
        width={24}
        height={23}
        color="inherit"
      />
    </>
  );
};

const Navigation = (props) => {
  return (
    <nav className={inriaSans.className}>
      <div className="h-[64px] mb-2 sm:h-[100px] md:hidden">
        <MobileNavigation />
      </div>
      <div className="hidden md:block lg:hidden">
        <div className="fixed w-full z-30 bg-[#fff] backdrop-blur-xl">
          <TabletNavigation />
        </div>
        <div className="h-40" />
      </div>
      <div className="hidden lg:block">
        <div className="fixed w-full z-30 bg-[#fff] backdrop-blur-xl">
          <WebNavigation />
        </div>
        <div className="h-40" />
      </div>
    </nav>
  );
};

export default Navigation;

// Mobile

const MobileNavigation = (props) => {
  return <MobileNav />;
};

const MobileNav = () => {
  const searchRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchBar(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleClickOutside);
    };
  }, [searchRef]);

  const handleSearchBarOpen = () => {
    setShowSearchBar(true);
  };
  const handleSearchBarClose = () => {
    setShowSearchBar(false);
  };
  const handleSearchOpen = () => {
    setToggleSearch(true);
  };
  const handleSearchClose = () => {
    setShowSearchBar(false);
    setToggleSearch(false);
  };

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const styles = {
    container: {
      height: "60px",
      zIndex: "99",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "white",
      width: "100%",
      color: "black",
      gap: "0.5rem",
    },
    search: {
      margin: "0",
      width: "90%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
  };

  return (
    <div className="z-50 fixed top-0 w-full">
      <div className="hidden sm:block">
        <ContactNavigation />
      </div>
      <div
        style={styles.container}
        className="px-4 justify-center align-center"
      >
        <div
          className={menuOpen ? "ml-1" : ""}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <HiMenuAlt2
            onClick={() => handleMenuClick()}
            color="black"
            style={{ fontSize: "27px" }}
          />
          <Divider
            orientation="vertical"
            variant="start"
            flexItem
            color="#C3C3C3"
            // className="ml-5"
            style={{ marginLeft: "7px" }}
          />
          {/* <Divider orientation="vertical" size="small" /> */}
          {/* <MenuButton
              open={this.state.menuOpen}
              onClick={() => this.handleMenuClick()}
              color="black"
            /> */}
        </div>
        {!showSearchBar ? (
          <div className="block ">
            <Link href="/">
              <Box
                component="img"
                src={"/logo/meta-Logo.png"}
                sx={{ width: { xs: "150px", sm: "120px" } }}
              />
            </Link>
          </div>
        ) : null}
        {/* <EvalyLogo height={22} /> */}
        {/* {!showSearchBar ? (
          <div
            className={`${
              !showSearchBar
                ? "relative w-full h-full transition-all ease-in-out duration-700"
                : "w-0"
            } `}
            style={{ border: "1px solid black" }}
          > */}
        <div
          className={`${
            !showSearchBar
              ? "w-full flex justify-end items-center transition-all ease-in-out duration-700"
              : "w-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex justify-center items-center border-2 rounded-full cursor-pointer">
            <IconButton
              onClick={() => router.push("/profile")}
              sx={{ padding: 0.5 }}
              // className="border border-[#ccc] rounded-full shadow-md"
              color="inherit"
            >
              <Icon iconName={userIcon} />
              {/* <PersonIcon className={`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'}`} /> */}
            </IconButton>
            {/* <LockIcon style={{ fontSize: "19px" }} /> */}
          </div>
          <div
            className="flex justify-center items-center border-2 rounded-full p-1 ml-1 cursor-pointer"
            onClick={() => handleSearchBarOpen()}
          >
            <SearchIcon style={{ fontSize: "19px", cursor: "pointer" }} />
          </div>
        </div>
        {/* </div>
        ) : null} */}

        <>
          {/* <p className="font-bold">Login</p> */}
          {/* <div className="border-2 border-black rounded-md px-2 py-1 ml-3">
              <p className="font-bold">Search</p>
            </div> */}
        </>
        <div
          className={`${
            showSearchBar
              ? "flex justify-end w-full transition-all ease-in-out duration-700"
              : "opacity-0 w-0 transition-all ease-out-in duration-700 flex pointer-events-none"
          }`}
        >
          <div style={styles.search} ref={searchRef}>
            <div
              className={`${inriaSans.className} w-full flex items-center justify-end`}
            >
              <input
                className="w-full py-[4px] rounded-tl-md outline-none rounded-bl-md px-3 border border-black"
                type="text"
                onBlur={() => {
                  handleSearchClose();
                }}
                onFocus={() => {
                  handleSearchOpen();
                }}
                onChange={() => {
                  handleSearchOpen();
                }}
                onScroll={() => {
                  handleSearchClose();
                }}
                placeholder="Search for ..."
              />
            </div>
            {toggleSearch && (
              <SearchBar
                onClose={() => {
                  handleSearchClose();
                }}
              />
            )}
          </div>
          <button className="py-[3px] rounded-tr-md rounded-br-md px-3 bg-black">
            <CloseIcon
              onClick={() => handleSearchBarClose()}
              style={{ color: "white", fontSize: "20px" }}
              color="white"
            />
          </button>
        </div>
        {/* </Collapse>
        </Box> */}
        {/* <Grow
          in={toggleSearch}
          style={{
            transformOrigin: "0 0 0",
            display: !toggleSearch ? "none" : "flex",
          }}
          {...(toggleSearch ? { timeout: 900 } : {})}
        >
          <div className=" flex justify-end w-full ">
            <div style={styles.search}>
              <div
                className={`${inriaSans.className} w-full flex items-center justify-end`}
              >
                <input
                  className="w-full py-[4px] rounded-tl-md outline-none rounded-bl-md px-3 border border-black"
                  type="text"
                  onBlur={() => {
                    handleSearchClose();
                  }}
                  onFocus={() => {
                    handleSearchOpen();
                  }}
                  onChange={() => {
                    handleSearchOpen();
                  }}
                  onScroll={() => {
                    handleSearchClose();
                  }}
                  placeholder="Search for ..."
                />
              </div>
              {toggleSearch && (
                <SearchBar
                  onClose={() => {
                    handleSearchClose();
                  }}
                />
              )}
            </div>
            <button className="py-[9px] rounded-tr-md rounded-br-md px-3 bg-black">
              <AiOutlineSearch color="white" />
            </button>
          </div>
        </Grow> */}
      </div>
      <div>
        <Drawer
          anchor={"left"}
          open={menuOpen}
          onClose={() => {
            handleMenuClick();
          }}
        >
          <MobileDrawerContent />
        </Drawer>
      </div>
    </div>
  );
};

const MobileDrawerContent = (props) => {
  const router = useRouter();
  return (
    <div className={`${inriaSans.className} w-[75vw]`}>
      <div className="px-6 mt-9">
        <button className="flex bg-[#f3ceb0] border border-black py-2 rounded-md items-center gap-2 w-full justify-center">
          <p className="lg:text-lg">Login</p>
        </button>
      </div>
      <div className="h-6"></div>
      <Divider className="pt-2" />
      <div className="h-[77vh] overflow-y-scroll">
        <List>
          {[
            "Orders",
            "Categories",
            "Mobile Topup",
            "Campaigns",
            "Shops",
            "Followed Shops",
            "Vouchers",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => router.push(text.toLowerCase())}
                className="my-1"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <ListItemIcon>
                      {index === 0 && (
                        <ReceiptLongOutlinedIcon sx={{ height: 17 }} />
                      )}
                      {index === 1 && <CardGiftcardIcon sx={{ height: 17 }} />}
                      {index === 2 && (
                        <MobileFriendlyOutlinedIcon sx={{ height: 17 }} />
                      )}
                      {index === 3 && <AcUnitIcon sx={{ height: 17 }} />}
                      {index === 4 && <StoreIcon sx={{ height: 17 }} />}
                      {index === 5 && (
                        <FavoriteBorderIcon sx={{ height: 17 }} />
                      )}
                      {index === 6 && (
                        <ConfirmationNumberOutlinedIcon sx={{ height: 17 }} />
                      )}
                    </ListItemIcon>
                    <p>{text}</p>
                  </div>
                  <div>
                    <KeyboardArrowRightIcon />
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <ul className="flex mt-3 font-light gap-[1px] text-[11px] mx-auto px-2">
        <li>About Us</li>
        <li className="mx-[2px]">&#x2022;</li>
        <li>Contact Us</li>
        <li className="mx-[2px]">&#x2022;</li>
        <li>Privacy Policy</li>
        <li className="mx-[2px]">&#x2022;</li>
        <li>Purchasing Policy</li>
      </ul>
    </div>
  );
};

// Tablet

const TabletNavigation = (props) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggleSearch, setToggleSearch] = useState(false);
  const open = Boolean(anchorEl);
  const ref = useRef(null);
  const [isMobileMenuClicked, setIsMobileMenuClicked] = useState("");
  function handleSearchOpen() {
    setToggleSearch(true);
  }
  function handleSearchClose() {
    setToggleSearch(false);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setToggle(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setToggle(false);
  };

  useEffect(() => {
    [
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
    ].map((item) => {
      if (router.query.id === item) {
        setIsMobileMenuClicked("");
      }
    });
  }, [router]);

  return (
    <>
      <ContactNavigation />
      <div className="flex px-10 items-center w-full justify-between h-16">
        <div>
          <Link href="/">
            <Box
              component="img"
              src={"/logo/meta-Logo.png"}
              sx={{ width: "120px" }}
            />
          </Link>
          {/* <EvalyLogo height={25} /> */}
        </div>
        <div className="flex w-full px-5">
          <div className="w-full relative">
            <div className="flex items-center">
              <input
                className="w-full py-[4px] rounded-tl-md outline-none rounded-bl-md px-3 sm:px-4 border border-black"
                onBlur={handleSearchClose}
                onFocus={handleSearchOpen}
                onChange={handleSearchOpen}
                onScroll={handleSearchClose}
                type="text"
                placeholder="Search for ..."
              />
            </div>
            {toggleSearch && <SearchBar onClose={handleSearchClose} />}
          </div>
          <button className="py-[9px] rounded-tr-md rounded-br-md px-5 bg-black">
            <AiOutlineSearch color="white" />
          </button>
        </div>
        <NavbarButtonsMain size="sm" />
      </div>
      <div
        className="bg-[#fff] px-10 justify-between flex text-white h-12 shadow-none"
        style={{
          border: "1px solid #D1D5DB",
        }}
      >
        <div
          className="flex items-center bg-white w-[255px] shadow-none"
          ref={ref}
          style={{
            borderLeft: "1px solid #D1D5DB",
            borderRight: "1px solid #D1D5DB",
            // borderBottom: "1px solid #D1D5DB",
            paddingLeft: "19.2px",
            paddingRight: "18px",
            // paddingTop: "18px",
          }}
        >
          <CategoriesMenu type="normal" ref={ref} />
        </div>
        <ul className="flex-1 flex gap-4 items-center">
          <li
            className="hover:text-gray-300 cursor-pointer text-black"
            style={{
              background:
                isMobileMenuClicked === "Categories"
                  ? "#65ACF3"
                  : "transparent",
              padding: "2px 10px",
              borderRadius: "50px",
            }}
            onClick={() => {
              setIsMobileMenuClicked("Categories");
              setTimeout(() => {
                router.push("/categories");
              }, 500);
            }}
          >
            Categories
          </li>
          <li
            className="hover:text-gray-300 text-black cursor-pointer text-black"
            style={{
              background:
                isMobileMenuClicked === "All Brands"
                  ? "#65ACF3"
                  : "transparent",
              padding: "2px 10px",
              borderRadius: "50px",
            }}
            onClick={() => {
              setIsMobileMenuClicked("All Brands");
              setTimeout(() => {
                router.push("/shops");
              }, 500);
            }}
          >
            All Brands
          </li>
          <li
            className="hover:text-gray-300 cursor-pointer text-black"
            style={{
              background:
                isMobileMenuClicked === "Campaigns" ? "#65ACF3" : "transparent",
              padding: "2px 10px",
              borderRadius: "50px",
            }}
            onClick={() => {
              setIsMobileMenuClicked("Campaigns");
              // setTimeout(() => {
              //   router.push("/categories");
              // }, 500);
            }}
          >
            Campaigns
          </li>
          {/* <li
            className="hover:text-gray-300 cursor-pointer text-black"
            style={{
              background:
                isMobileMenuClicked === "Top-up" ? "#65ACF3" : "transparent",
              padding: "2px 10px",
              borderRadius: "50px",
            }}
            onClick={() => {
              setIsMobileMenuClicked("Top-up");
              // setTimeout(() => {
              //   router.push("/categories");
              // }, 500);
            }}
          >
            Top-up
          </li> */}
          <li
            className="hover:text-gray-300 cursor-pointer text-black"
            style={{
              background:
                isMobileMenuClicked === "Express" ? "#65ACF3" : "transparent",
              padding: "2px 10px",
              borderRadius: "50px",
            }}
            onClick={() => {
              setIsMobileMenuClicked("Express");
              // setTimeout(() => {
              //   router.push("/categories");
              // }, 500);
            }}
          >
            Express
          </li>
          {/* <li
            className="hover:text-gray-300 cursor-pointer text-black"
            style={{
              background:
                isMobileMenuClicked === "T10" ? "#65ACF3" : "transparent",
              padding: "2px 10px",
              borderRadius: "50px",
            }}
            onClick={() => {
              setIsMobileMenuClicked("T10");
              // setTimeout(() => {
              //   router.push("/categories");
              // }, 500);
            }}
          >
            T10
          </li> */}
        </ul>
        <DotsTabletMenu />
      </div>
    </>
  );
};

// Notebooks & Desktops

const WebNavigation = (props) => {
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [visible, setVisible] = useState(false);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const [isMobileMenuClicked, setIsMobileMenuClicked] = useState("");

  const ref = useRef(null);
  useEffect(() => {
    if (router.pathname == "/") {
      setVisible(false);
      function handleScroll() {
        if (window.scrollY > 500) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else setVisible(true);
  }, [router.pathname]);
  useEffect(() => {
    [
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
    ].map((item) => {
      if (router.query.id === item) {
        setIsMobileMenuClicked("");
      }
    });
  }, [router]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setToggle(true);
  };
  function handleSearchOpen() {
    setToggleSearch(true);
  }
  function handleSearchClose() {
    setToggleSearch(false);
  }
  const handleClose = () => {
    setAnchorEl(null);
    setToggle(false);
  };
  return (
    <>
      <ContactNavigation />
      <div className="flex items-center max-w-7xl mx-auto justify-between h-16 px-10 xl:px-12 m-1">
        <div>
          <Link href="/">
            <Box
              component="img"
              src={"/logo/meta-Logo.png"}
              sx={{ width: "120px" }}
            />
          </Link>
          {/* <EvalyLogo height={25} /> */}
        </div>
        <div className="flex w-full">
          <div className="ml-5 relative w-full">
            <div className="flex items-center">
              <input
                className="w-[100%] py-[7px] rounded-tl-md outline-none rounded-bl-md px-3 border border-black"
                type="text"
                onBlur={handleSearchClose}
                onFocus={handleSearchOpen}
                onChange={handleSearchOpen}
                onScroll={handleSearchClose}
                placeholder="Search for ..."
              />
            </div>
            {toggleSearch && (
              <SearchBar
                onClose={() => {
                  setToggleSearch(false);
                }}
              />
            )}
          </div>
          <button className="py-[12px] rounded-tr-md rounded-br-md px-8 bg-black mr-5">
            <AiOutlineSearch color="white" />
          </button>
        </div>
        <NavbarButtonsMain size="md" />
      </div>
      {/* <div className="bg-[#040720]"> */}
      <div
        className="bg-[#FFF]"
        style={{
          border: "1px solid #D1D5DB",
        }}
      >
        {/* F5F5F5 */}
        <div className="mx-auto max-w-7xl flex text-white h-12 px-10 xl:px-12">
          <div
            ref={ref}
            className="flex items-center px-4 w-[23%] shadow-none"
            style={{
              borderLeft: "1px solid #D1D5DB",
              borderRight: "1px solid #D1D5DB",
              // borderBottom: "1px solid #D1D5DB",
              // borderBottom: "1px solid black",
            }}
          >
            {!visible ? (
              <div
                className="flex items-center justify-between gap-3 w-full"
                id="basic-button"
                aria-haspopup="true"
              >
                <MenuIcon style={{ color: "#000" }} />
                <p className={`${inriaSans.className} text-black`}>
                  CATEGORIES
                </p>
                <KeyboardArrowDownIcon sx={{ color: "#000" }} />
              </div>
            ) : (
              <CategoriesMenu ref={ref} type="toggle" />
            )}
          </div>
          <ul
            className="flex-1 gap-4 flex items-center px-4"
            style={{
              borderRight: "1px solid #D1D5DB",
            }}
          >
            <li
              className="hover:text-gray-300 text-black cursor-pointer"
              style={{
                background:
                  isMobileMenuClicked === "Categories"
                    ? "#65ACF3"
                    : "transparent",
                padding: "2px 10px",
                borderRadius: "50px",
              }}
              onClick={() => {
                setIsMobileMenuClicked("Categories");
                setTimeout(() => {
                  router.push("/categories");
                }, 500);
              }}
            >
              Categories
            </li>
            <li
              className="hover:text-gray-300 text-black cursor-pointer"
              style={{
                background:
                  isMobileMenuClicked === "All Brands"
                    ? "#65ACF3"
                    : "transparent",
                padding: "2px 10px",
                borderRadius: "50px",
              }}
              onClick={() => {
                setIsMobileMenuClicked("All Brands");
                setTimeout(() => {
                  router.push("/shops");
                }, 500);
              }}
            >
              All Brands
            </li>
            <li
              className="hover:text-gray-300 text-black cursor-pointer"
              style={{
                background:
                  isMobileMenuClicked === "Campaigns"
                    ? "#65ACF3"
                    : "transparent",
                padding: "2px 10px",
                borderRadius: "50px",
                // color: "#040720",
              }}
              onClick={() => {
                setIsMobileMenuClicked("Campaigns");
                // setTimeout(() => {
                //   router.push("/categories");
                // }, 500);
              }}
            >
              Campaigns
            </li>
            <li
              className="hover:text-gray-300 text-black cursor-pointer"
              style={{
                background:
                  isMobileMenuClicked === "Express" ? "#65ACF3" : "transparent",
                padding: "2px 10px",
                borderRadius: "50px",
              }}
              onClick={() => {
                setIsMobileMenuClicked("Express");
                // setTimeout(() => {
                //   router.push("/categories");
                // }, 500);
              }}
            >
              Express
            </li>
            {/* <li
              className="hover:text-gray-300 text-black cursor-pointer"
              style={{
                background:
                  isMobileMenuClicked === "Cyclone" ? "#65ACF3" : "transparent",
                padding: "2px 10px",
                borderRadius: "50px",
              }}
              onClick={() => {
                setIsMobileMenuClicked("Cyclone");
                // setTimeout(() => {
                //   router.push("/categories");
                // }, 500);
              }}
            >
              Cyclone
            </li> */}
          </ul>
          <ul className="flex gap-4 xl:gap-9 text-black items-center">
            <li
              className="hover:text-gray-300 cursor-pointer"
              style={{
                background:
                  isMobileMenuClicked === "NewsFeed"
                    ? "#65ACF3"
                    : "transparent",
                padding: "2px 10px",
                borderRadius: "50px",
              }}
              onClick={() => {
                setIsMobileMenuClicked("NewsFeed");
                // setTimeout(() => {
                //   router.push("/categories");
                // }, 500);
              }}
            >
              NewsFeed
            </li>
            {/* <li
              className="hover:text-gray-300 text-black cursor-pointer"
              style={{
                background:
                  isMobileMenuClicked === "Merchant Zone"
                    ? "#65ACF3"
                    : "transparent",
                padding: "2px 10px",
                borderRadius: "50px",
              }}
              onClick={() => {
                setIsMobileMenuClicked("Merchant Zone");
                // setTimeout(() => {
                //   router.push("/categories");
                // }, 500);
              }}
            >
              Merchant Zone
            </li> */}
            <li
              className="hover:text-gray-300 text-black cursor-pointer mr-1"
              style={{
                background:
                  isMobileMenuClicked === "Help" ? "#65ACF3" : "transparent",
                padding: "2px 10px",
                borderRadius: "50px",
              }}
              onClick={() => {
                setIsMobileMenuClicked("Help");
                // setTimeout(() => {
                //   router.push("/categories");
                // }, 500);
              }}
            >
              Help
            </li>
          </ul>
        </div>
      </div>
      <CartMenuWeb open={open} anchorEl={anchorEl} toggleMenu={handleClose} />
    </>
  );
};

const ContactNavigation = () => {
  return (
    <div className="bg-[#f7f8fb]">
      <div className="flex items-center max-w-7xl mx-auto justify-between h-10 md:h-12 px-4 md:px-10 xl:px-12">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2" aria-haspopup="true">
            <PhoneInTalkOutlinedIcon
              sx={{ width: 18, height: 18, color: "#b91c1c" }}
            />
            <p className={`${inriaSans.className} text-sm `}>09638111666</p>
          </div>
          <div className="flex items-center gap-2" aria-haspopup="true">
            <EmailOutlinedIcon
              sx={{ width: 18, height: 18, color: "#b91c1c" }}
            />
            <p className={`${inriaSans.className} text-sm `}>
              Support@meta.com
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2" aria-haspopup="true">
          <PhoneIphoneOutlinedIcon
            sx={{ width: 18, height: 18, color: "#b91c1c" }}
          />
          <p className={`${inriaSans.className} text-sm `}>
            Save big on our app
          </p>
        </div>
      </div>
    </div>
  );
};
