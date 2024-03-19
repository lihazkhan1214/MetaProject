import Link from "next/link";
import React from "react";
import { EvalyLogo } from "../../components/icons/logo";
import { useFormik, Form, FormikProvider } from "formik";
import FormTextField from "../../components/forms/FormTextField";
import * as yup from "yup";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import {
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Head from "next/head";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const router = useRouter();

  const initialValues = {
    email: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email().required("Enter your email"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log("Form Values", values);
      router.push("/auth/verifyToken");
    },
  });

  return (
    <>
      <Head>
        <title>Meta - Forgot Password</title>
      </Head>
      <div className="m-3 mt-4">
        <div className="flex flex-col gap-11 rounded-md items-center justify-center py-11 bg-white mx-auto max-w-lg sm:shadow sm:rounded-md -mt-2  my-0 sm:my-11">
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
              Forgot Password?
            </h2>
            <p className="text-lg font-medium text-black max-w-[450px]">
              Don't worry! we will send an OTP to your registered email address.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-[90%]">
            <TextField
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              placeholder="Email Address"
              variant="outlined"
              color="secondary"
              size="medium"
              className="textField"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineOutlinedIcon color="inherit" />
                  </InputAdornment>
                ),
              }}
            />

            <button
              className="bg-[#000000] text-white rounded-lg p-3 w-full"
              type="submit"
              onClick={formik.handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
