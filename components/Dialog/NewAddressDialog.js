import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function NewAddressDialog({ open, handleClose }) {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Address</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Update your Parents information for ensuring security and recovery of
          your account.
        </DialogContentText>
        <div className="flex-1">
          <div className="shadow rounded-md bg-white">
            <div className="px-4 py-5">
              <div>
                <div className="mt-3">
                  <p>Address</p>
                  <div>
                    <input
                      type="text"
                      className="border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    className="flex bg-[#f3ceb0] border border-black py-2 rounded-md items-center gap-2 w-full justify-center"
                    onClick={handleClose}
                  >
                    <div>
                      <BiArrowBack />
                    </div>
                    <p className="lg:text-lg">Cancel</p>
                  </button>
                  <button
                    onClick={handleClose}
                    className="flex bg-gray-500 border border-black text-white py-2 rounded-md items-center gap-2 w-full justify-center"
                  >
                    <p className="lg:text-lg">Edit</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
