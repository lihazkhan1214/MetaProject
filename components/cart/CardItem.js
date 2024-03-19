import { Avatar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/cartSlice";
import { ImCross } from "react-icons/im";

const CardItem = ({ id, prod, price, quantity, img }) => {
  const dispatch = useDispatch();
  const handleItemClick = () => {
    dispatch(removeItem(id));
  };
  return (
    <React.Fragment>
      <div className="px-3 py-3 flex align-center justify-between gap-4 bg-[#fff]">
        <Image
          className="flex-0 w-fit object-contain mx-auto h-[80px] md:h-[55px] lg:h-[55px]"
          src={img}
          alt={prod}
          width={60}
          height={150}
        />
        <div className="flex-1 flex flex-col gap-0.5">
          <div className="font-bold text-md lines-2">{prod}</div>
          <div className="font-semibold text-sm">
            ${price} X {quantity}
          </div>
        </div>
        {/* <div>gjlkjlkjlkjllj</div> */}

        <div className="flex h-auto items-center">
          <IconButton
            className="flex-0 h-fit"
            size="small"
            onClick={handleItemClick}
          >
            <ImCross />
            {/* <CloseIcon /> */}
          </IconButton>
        </div>
      </div>
      <hr className="mx-3 border-gray-300" />
    </React.Fragment>
  );
};

export default CardItem;
