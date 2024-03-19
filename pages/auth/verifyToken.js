import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { IconButton } from "@mui/material";
import Head from "next/head";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import TokenPage from "../../components/forms/otpInput";

const VerifyToken = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Continue to next step");
  };

  return (
    <>
      <Head>
        <title>Meta - Verify OTP</title>
      </Head>
      <div className="m-3 mt-4">
        <div className="flex flex-col rounded-md gap-11 items-center justify-center py-11 bg-white px-4 sm:px-0 mx-auto max-w-lg sm:shadow sm:rounded-md -mt-2  my-0 sm:my-11">
          <div className="w-[90%]">
            <IconButton
              color="inherit"
              onClick={() => router.push("/auth/signin")}
              size="small"
              className="mb-4 -ml-2"
            >
              <ArrowBackIcon />
            </IconButton>
            <h2 className="text-3xl font-bold text-black text-start w-full mb-2">
              Help us verify your account
            </h2>
            <p className="text-md font-medium text-black">
              An OTP has been sent to{" "}
              <span className="font-bold">user@gmail.com</span> Please enter
              that below.
            </p>
          </div>
          <TokenPage />
          <button
            className="bg-[#000000] text-white rounded-lg p-3 w-[90%]"
            type="submit"
            onClick={handleClick}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default VerifyToken;
