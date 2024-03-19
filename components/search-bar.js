import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { inriaSans } from "./utils/getinriaFont";
import Image from "next/image";
import CallMadeIcon from "@mui/icons-material/CallMade";

function SearchBar(props) {
  const { onClose } = props;

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        onClose();
      }
    });
  });

  return (
    <>
      <div onClick={onClose} />
      <div className="w-full right-0 md:w-full border border-zinc-300 rounded-md absolute bg-[#fff] px-2 top-[36px] md:top-[36px] lg:top-[42px] ">
        <BasicTabs />
      </div>
    </>
  );
}

export default SearchBar;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          sx={{ color: "red" }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <p className={`${inriaSans.className} search-tab capitalize`}>
                Products
              </p>
            }
            {...a11yProps(0)}
          />
          {/* <Tab
            label={
              <p className={`${inriaSans.className} search-tab capitalize`}>
                Shops
              </p>
            }
            {...a11yProps(1)}
          /> */}
          <Tab
            label={
              <p className={`${inriaSans.className} search-tab capitalize`}>
                Brands
              </p>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={inriaSans.className} style={{ width: "100%" }}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Image
                className="w-[40px] h-[35px] rounded-sm"
                src={"/search/cooker.webp"}
                alt={"Cooker"}
                width={80}
                height={80}
                style={{ border: "1px solid #F5F5F5" }}
              />
              <div className="text-sm flex-1 md:text-base">
                <p
                  className="text-xs md:text-sm h-full flex items-center lines-2"
                  // style={{ border: "1px solid black" }}
                >
                  H&S Pressure Cooker 6.5L
                </p>
                {/* <del className="font-light">$ 3100</del>
                <p className="text-base md:text-lg font-bold">$ 1767</p> */}
              </div>
              {/* <CallMadeIcon sx={{ height: 15 }} /> */}
            </div>
            <div className="flex gap-4">
              <Image
                className="w-[40px] h-[35px] rounded-sm"
                src={"/categories/necklace.png"}
                alt={"Cooker"}
                width={80}
                height={80}
                style={{ border: "1px solid #F5F5F5" }}
              />
              <div className="text-sm flex-1 md:text-base">
                <p className="text-xs md:text-sm h-full flex items-center lines-2">
                  A wristwatch is desioned to be worn around the wrist. attached
                  bu a watch strap or other tupe
                </p>
                {/* <del className="font-light">$ 4500</del>
                <p className="text-base font-bold md:text-lg">$ 3200</p> */}
              </div>
              {/* <CallMadeIcon sx={{ height: 15 }} /> */}
            </div>
            <div className="flex gap-4">
              <Image
                className="w-[40px] h-[35px] rounded-sm"
                src={"/categories/nivea.jpeg"}
                alt={"Cooker"}
                width={80}
                height={80}
                style={{ border: "1px solid #F5F5F5" }}
              />
              <div className="text-sm flex-1 md:text-base">
                <p className="text-xs md:text-sm h-full flex items-center lines-2">
                  Nivea Cream for Men
                </p>
                {/* <del className="font-light">$ 70</del>
                <p className="text-base font-bold md:text-lg">$ 50</p> */}
              </div>
              {/* <CallMadeIcon sx={{ height: 15 }} /> */}
            </div>
            <div className="flex justify-between gap-4">
              <Image
                className="w-[40px] h-[35px] rounded-sm"
                src={"/categories/palmolive.jpeg"}
                alt={"Cooker"}
                width={80}
                height={80}
                style={{ border: "1px solid #F5F5F5" }}
              />
              <div className="text-sm flex-1 md:text-base">
                <p className="text-xs md:text-sm h-full flex items-center lines-2">
                  Palmolive
                </p>
                {/* <del className="font-light">$ 50</del>
                <p className="text-base font-bold md:text-lg">$ 30</p> */}
              </div>
              {/* <CallMadeIcon sx={{ height: 15 }} /> */}
            </div>
            <div className="flex justify-between gap-4">
              <Image
                className="w-[40px] h-[35px] border-radius-2 rounded-sm"
                src={"/categories/palmolive.jpeg"}
                alt={"Cooker"}
                width={80}
                height={80}
                style={{ border: "1px solid #F5F5F5" }}
                // border="1px solid gray"
              />
              <div className="text-sm flex-1 md:text-base">
                <p className="text-xs md:text-sm h-full flex items-center lines-2">
                  Palmolive
                </p>
                {/* <del className="font-light">$ 50</del>
                <p className="text-base font-bold md:text-lg">$ 30</p> */}
              </div>
              {/* <CallMadeIcon sx={{ height: 15 }} /> */}
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className={`${inriaSans.className} text-center`}>No Shop Found</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className={`${inriaSans.className} text-center`}>No Brands found</p>
      </TabPanel>
    </Box>
  );
}
