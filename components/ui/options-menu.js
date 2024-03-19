import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

import { inriaSans } from "../utils/getinriaFont";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "black" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "black",
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="h-full flex items-center"
      style={{
        "&:hover": {
          background: "#fff",
        },
      }}
    >
      {/* <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#3c52b2",
          },
          border: "1px solid black",
        }}
      > */}
      {/* <MoreVertOutlinedIcon
          className="translate-x-7"
          sx={{
            color: "#000",
          }}
        />
      </Button> */}{" "}
      <button>
        <MoreVertOutlinedIcon
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          className="translate-x-7"
          disableElevation
          onClick={handleClick}
          style={{
            color: "#000",
            cursor: "pointer",
            marginRight: "18px",
          }}
          // sx={{
          //   color: "#000",
          // }}
        />
      </button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <p className={inriaSans.className}>Cyclone</p>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          {/* <FileCopyIcon /> */}
          <p className={inriaSans.className}>New Feed</p>
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        <MenuItem onClick={handleClose} disableRipple>
          {/* <ArchiveIcon /> */}
          <p className={inriaSans.className}>Merchant Zone</p>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          {/* <MoreHorizIcon /> */}
          <p className={inriaSans.className}>Help</p>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
