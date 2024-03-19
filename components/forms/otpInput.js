import React, { useRef, useEffect, useState } from 'react';

let currentOTPIndex = 0;
const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const inputRef = useRef(null);

  const handleOnKeyDown = (e, index) => {
    currentOTPIndex = index;
    if (e.key === 'Backspace') setActiveOTPIndex(currentOTPIndex - 1);
  };
  const handleChange = (e) => {
    const val = e.target.value;

    const newOTP = [...otp];
    newOTP[currentOTPIndex] = val.substring(val.length - 1);
    if (!val) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);
    setOtp(newOTP);
  };

  useEffect(() => {
    inputRef.current?.focus();
    return () => {};
  }, [activeOTPIndex]);

  return (
    <div className='w-[90%] flex justify-center items-center space-x-2'>
      {otp.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <input
              ref={index === activeOTPIndex ? inputRef : null}
              type='number'
              className='w-2/12 h-12 rounded bg-[#f2f3f5] outline-none text-center font-semibold text-xl otpInput border-gray-400 focus:border-b-2 focus:border-black focus:text-gray-700 text-gray-600 transition'
              onChange={handleChange}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              value={otp[index]}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OtpInput;
