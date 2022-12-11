import React, { useState } from "react";
import pic from "./images/image-jeremy.png";
import Daily from "./Daily";
import Weekly from "./Weekly";
import Monthly from "./Monthly";

function Content() {
  const [daily, setDaily] = useState(false);
  const [weekly, setWeekly] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const setIsWeek = () => {
    setWeekly(!weekly);
    setMonthly(false);
    setDaily(false);
  };
  const setIsMonth = () => {
    setMonthly(!monthly);
    setWeekly(false);
    setDaily(false);
  };
  const setIsDay = () => {
    setDaily(!daily);
    setMonthly(false);
    setWeekly(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-fit">
        <div className="bg-Darkblue rounded-md my-5">
          <div className="bg-Blue  flex justify-center rounded-md w-fit p-8 md:flex-col">
            <div className="rounded-3xl border-2 border-white w-10 h-11 mx-2">
              <img src={pic} alt="/" className="w-10 h-10 " />
            </div>
            <div>
              <p>Report for </p>
              <p>Jeremy Robson</p>
            </div>
          </div>
          <div className="flex justify-evenly my-3 pb-2 md:flex-col md:text-center">
            <p className="cursor-pointer hover:text-white" onClick={setIsDay}>
              Daily
            </p>
            <p className="cursor-pointer hover:text-white" onClick={setIsWeek}>
              Weekly
            </p>
            <p className="cursor-pointer hover:text-white" onClick={setIsMonth}>
              Monthly
            </p>
          </div>
        </div>
        <div>
          {daily && <Daily />}
          {weekly && <Weekly />}
          {monthly && <Monthly />}
        </div>
      </div>
    </>
  );
}

export default Content;
