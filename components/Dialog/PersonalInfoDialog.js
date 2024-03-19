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

export default function PersonalInfoDialog({ open, handleClose }) {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Basic Information</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your basic information for ensuring security and recovery of
          your account.
        </DialogContentText>
        <div className="flex-1">
          <div className="shadow rounded-md bg-white">
            <div className="px-4 py-5">
              <div>
                <div className="mt-3">
                  <p>Meta Number:</p>
                  <div>
                    <input
                      type="text"
                      className="border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                      placeholder="04336436364"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <p>First Name:</p>
                  <div>
                    <input
                      type="text"
                      className="border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                      placeholder="Sheikh"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <p>Last Name:</p>
                  <div>
                    <input
                      type="text"
                      className="border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                      placeholder="Swim"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <p>Contact Number:</p>
                  <div>
                    <input
                      type="text"
                      className="border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                      placeholder="04336436364"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <p>Gender:</p>
                  <div>
                    <select className="border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]">
                      <option selected>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="mt-3">
                  <p>Date of Birth:</p>
                  <div>
                    <input
                      type="date"
                      className="border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <p>Member Since:</p>
                  <div>
                    <input
                      type="date"
                      className="border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <p>Organization:</p>
                  <div>
                    <input
                      type="text"
                      className="border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                      placeholder="Organization"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <p>Occupation:</p>
                  <div>
                    <input
                      type="text"
                      className="border mt-2 outline-black shadow-sm rounded-sm w-full lg:text-lg px-3 py-2 border-[#ccc]"
                      placeholder="Occupation"
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
                    <p className="lg:text-lg">Submit</p>
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
