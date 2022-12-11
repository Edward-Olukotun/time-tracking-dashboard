import React from "react";
import ellipse from "./images/icon-ellipsis.svg";
import work from "./images/icon-work.svg";
import play from "./images/icon-play.svg";
import study from "./images/icon-study.svg";
import exercise from "./images/icon-exercise.svg";
import self from "./images/icon-self-care.svg";
import social from "./images/icon-social.svg";

function Monthly() {
  return (
    <div className="text-white">
      <div className="md:flex md:my-5">
        <div className="bg-Lightred flex flex-col  my-4 rounded-md md:mx-5 md:w-52">
          <div className="flex justify-end">
            <img src={work} alt="/" className="w-5 h-6 mx-5 object-fit" />
          </div>
          <div className="flex justify-evenly bg-Darkblue hover:bg-Blue  rounded-md">
            <div className="flex flex-col my-5 md:ml-5">
              <p className="font-semibold">work</p>
              <p className="font-medium text-3xl">103hrs</p>
            </div>
            <div className="flex flex-col ml-4  my-5">
              <div className="flex justify-end">
                <img
                  src={ellipse}
                  alt="/"
                  className="h-1 mx-2 w-5 shadow-sm hover:shadow-white hover:cursor-pointer"
                />
              </div>
              <p className="pt-8 text-xs md:pt-20 md:-ml-[120%] text-Desaturatedblue ">
                Last Month - 128hrs
              </p>
            </div>
          </div>
        </div>
        <div className="bg-Softblue flex flex-col rounded-md my-4 md:mx-5 md:w-52">
          <div className="flex justify-end">
            <img src={play} alt="/" className="w-5 h-6 mx-5 object-fit" />
          </div>
          <div className="flex justify-evenly bg-Darkblue hover:bg-Blue rounded-md">
            <div className="flex flex-col my-5 md:ml-5">
              <p className="font-semibold">play</p>
              <p className="font-medium text-3xl">23hrs</p>
            </div>
            <div className="flex flex-col ml-4  my-5">
              <div className="flex justify-end">
                <img
                  src={ellipse}
                  alt="/"
                  className="h-1 mx-2 w-5 shadow-sm hover:shadow-white hover:cursor-pointer"
                />
              </div>
              <p className="pt-8 text-xs md:pt-20 md:-ml-[90%] text-Desaturatedblue ">
                Last Month - 29hrs
              </p>
            </div>
          </div>
        </div>
        <div className="bg-Light-red flex flex-col rounded-md my-4 md:mx-5 md:w-52">
          <div className="flex justify-end">
            <img src={study} alt="/" className="w-5 h-6 mx-5 object-fit" />
          </div>
          <div className="flex justify-evenly bg-Darkblue hover:bg-Blue  rounded-md">
            <div className="flex flex-col my-5 md:ml-3">
              <p className="font-semibold">study</p>
              <p className="font-medium text-3xl">13hrs</p>
            </div>
            <div className="flex flex-col ml-4  my-5">
              <div className="flex justify-end">
                <img
                  src={ellipse}
                  alt="/"
                  className="h-1 mx-2 w-5 shadow-sm hover:shadow-white hover:cursor-pointer"
                />
              </div>
              <p className="pt-8 text-xs md:pt-20 md:-ml-[80%] text-Desaturatedblue ">
                Last Month - 19hrs
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:my-5">
        <div className="bg-Limegreen flex flex-col rounded-md my-4 md:mx-5 md:w-52">
          <div className="flex justify-end">
            <img src={exercise} alt="/" className="w-5 h-6 mx-5 object-fit" />
          </div>
          <div className="flex justify-evenly bg-Darkblue hover:bg-Blue rounded-md">
            <div className="flex flex-col my-5 md:ml-5">
              <p className="font-semibold">Exercise</p>
              <p className="font-medium text-3xl">11hrs</p>
            </div>
            <div className="flex flex-col ml-4  my-5">
              <div className="flex justify-end">
                <img
                  src={ellipse}
                  alt="/"
                  className="h-1 mx-2 w-5 shadow-sm hover:shadow-white hover:cursor-pointer"
                />
              </div>
              <p className="pt-8 text-xs text-Desaturatedblue md:pt-20 md:-ml-[80%]">
                Last Month - 18hrs
              </p>
            </div>
          </div>
        </div>
        <div className="bg-Violet flex flex-col rounded-md my-4 md:mx-5 md:w-52">
          <div className="flex justify-end">
            <img src={social} alt="/" className="w-5 h-6 mx-5 object-fit" />
          </div>
          <div className="flex justify-evenly bg-Darkblue hover:bg-Blue rounded-md">
            <div className="flex flex-col my-5 md:ml-5">
              <p className="font-semibold">social</p>
              <p className="font-medium text-3xl">21hrs</p>
            </div>
            <div className="flex flex-col ml-4  my-5">
              <div className="flex justify-end">
                <img
                  src={ellipse}
                  alt="/"
                  className="h-1 mx-2 w-5 shadow-sm hover:shadow-white hover:cursor-pointer"
                />
              </div>
              <p className="pt-8 text-xs md:pt-20 md:-ml-[80%] text-Desaturatedblue ">
                Last Month - 23hrs
              </p>
            </div>
          </div>
        </div>
        <div className="bg-Softorange flex flex-col rounded-md my-4 md:mx-5 md:w-52">
          <div className="flex justify-end">
            <img src={self} alt="/" className="w-5 h-6 mx-5 object-fit" />
          </div>
          <div className="flex justify-evenly bg-Darkblue hover:bg-Blue  rounded-md">
            <div className="flex flex-col my-5 md:ml-5">
              <p className="font-semibold">self care</p>
              <p className="font-medium text-3xl">7hrs</p>
            </div>
            <div className="flex flex-col ml-4  my-5">
              <div className="flex justify-end">
                <img
                  src={ellipse}
                  alt="/"
                  className="h-1 mx-2 w-5 shadow-sm hover:shadow-white hover:cursor-pointer"
                />
              </div>
              <p className="pt-8 text-xs md:pt-20 md:-ml-[80%] text-Desaturatedblue ">
                Last Month - 11hrs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monthly;
