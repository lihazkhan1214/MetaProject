import { Menu, MenuItem } from "@mui/material";
import React, {
  Component,
  useEffect,
  useState,
  // useRef
} from "react";
import MenuButton from "./MenuButton";
import { inriaSans } from "../utils/getinriaFont";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/router";

const CategoriesMenu = React.forwardRef((props, ref) => {
  // console.log(ref ? ref.current.offsetWidth : null);
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  // const newRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setToggle(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setToggle(false);
  };
  // useEffect(() => {
  //   console.log("width", newRef.current ? newRef.current.offsetWidth : 0);
  // }, [newRef.current]);

  useEffect(() => {
    const handleScroll = () => {
      setAnchorEl(null);
      setToggle(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [anchorEl]);
  // console.log(newRef);

  return (
    <>
      <button
        className={`w-full flex items-center justify-between gap-3`}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // style={{ marginTop: "2px" }}
        // style={{ border: "1px solid gray" }}
      >
        {/* <div className='flex items-center gap-1'> */}
        <MenuButton
          open={toggle}
          onClick={() => {
            setToggle(!toggle);
          }}
          color="#000"
          anchorEl={anchorEl}
        />
        <p className={`${inriaSans.className} text-black`}>CATEGORIES</p>
        {!toggle || !anchorEl ? (
          <KeyboardArrowRightIcon sx={{ color: "#000" }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ color: "#000" }} />
        )}
      </button>
      <Menu
        className={`MenuList borderRadTopZero ${
          props.type === "toggle"
            ? `translate-x-[-17.00px]`
            : "translate-x-[-20px]"
        } ${
          props.type === "toggle"
            ? "translate-y-[11.75px]"
            : "translate-y-[11px]"
        } p-0`}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          sx: {
            marginTop: { xs: "1px", lg: "1.2px" },
            width:
              props.type === "toggle"
                ? ref.current?.offsetWidth && `${ref.current.offsetWidth}px`
                : ref.current?.offsetWidth && `${ref.current.offsetWidth}px`,
            boxShadow: "none",
          },
        }}
        style={{
          boxShadow: "none",
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
            <React.Fragment key={item}>
              <MenuItem
                style={{
                  boxShadow: "none",
                }}
                className={`${
                  props.type === "toggle"
                    ? `${
                        ref.current.offsetWidth &&
                        `w-[${ref.current.offsetWidth}px]`
                      } `
                    : "w-[255px]"
                } h-full`}
                sx={{
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                key={item}
                onClick={() => {
                  router.push(`/product-category/${item}`);
                  handleClose();
                }}
                // onClick={handleClose}
              >
                <div
                  className={`${inriaSans.className} flex items-center justify-between w-full`}
                >
                  <p>{item}</p>
                  <KeyboardArrowRightIcon sx={{ height: 17 }} />
                </div>
              </MenuItem>
              {!(i === arr.length - 1) && <hr className="border-gray-300" />}
            </React.Fragment>
          );
        })}
      </Menu>
    </>
  );
});

export default CategoriesMenu;
