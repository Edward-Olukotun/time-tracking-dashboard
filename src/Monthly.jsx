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
      <div className="bg-Lightred flex flex-col rounded-md">
        <div className="flex justify-end">
          <img src={work} alt="/" className="w-5 h-6 mx-5 object-fit" />
        </div>
        <div className="flex justify-evenly bg-Darkblue  rounded-md">
          <div className="flex flex-col my-5">
            <p>work</p>
            <p>103hrs</p>
          </div>
          <div className="flex flex-col ml-4  my-5">
            <div className="flex justify-end">
              <img src={ellipse} alt="/" className="h-1 w-5" />
            </div>
            <p className="pt-4 text-sm">Last Month - 128hrs</p>
          </div>
        </div>
      </div>
      <div className="bg-Softblue flex flex-col rounded-md mt-4">
        <div className="flex justify-end">
          <img src={play} alt="/" className="w-5 h-6 mx-5 object-fit" />
        </div>
        <div className="flex justify-evenly bg-Darkblue rounded-md">
          <div className="flex flex-col my-5">
            <p>play</p>
            <p>23hrs</p>
          </div>
          <div className="flex flex-col ml-4  my-5">
            <div className="flex justify-end">
              <img src={ellipse} alt="/" className="h-1 w-5" />
            </div>
            <p className="pt-4 text-sm">Last Month - 29hrs</p>
          </div>
        </div>
      </div>
      <div className="bg-Light-red flex flex-col rounded-md mt-4">
        <div className="flex justify-end">
          <img src={study} alt="/" className="w-5 h-6 mx-5 object-fit" />
        </div>
        <div className="flex justify-evenly bg-Darkblue  rounded-md">
          <div className="flex flex-col my-5">
            <p>study</p>
            <p>13hrs</p>
          </div>
          <div className="flex flex-col ml-4  my-5">
            <div className="flex justify-end">
              <img src={ellipse} alt="/" className="h-1 w-5" />
            </div>
            <p className="pt-4 text-sm">Last Month - 19hrs</p>
          </div>
        </div>
      </div>
      <div className="bg-Limegreen flex flex-col rounded-md mt-4">
        <div className="flex justify-end">
          <img src={exercise} alt="/" className="w-5 h-6 mx-5 object-fit" />
        </div>
        <div className="flex justify-evenly bg-Darkblue rounded-md">
          <div className="flex flex-col my-5">
            <p>Exercise</p>
            <p>11hrs</p>
          </div>
          <div className="flex flex-col ml-4  my-5">
            <div className="flex justify-end">
              <img src={ellipse} alt="/" className="h-1 w-5" />
            </div>
            <p className="pt-4 text-sm">Last Month - 18hrs</p>
          </div>
        </div>
      </div>
      <div className="bg-Violet flex flex-col rounded-md mt-4">
        <div className="flex justify-end">
          <img src={social} alt="/" className="w-5 h-6 mx-5 object-fit" />
        </div>
        <div className="flex justify-evenly bg-Darkblue rounded-md">
          <div className="flex flex-col my-5">
            <p>social</p>
            <p>21hrs</p>
          </div>
          <div className="flex flex-col ml-4  my-5">
            <div className="flex justify-end">
              <img src={ellipse} alt="/" className="h-1 w-5" />
            </div>
            <p className="pt-4 text-sm">Last Month - 23hrs</p>
          </div>
        </div>
      </div>
      <div className="bg-Softorange flex flex-col rounded-md my-4">
        <div className="flex justify-end">
          <img src={self} alt="/" className="w-5 h-6 mx-5 object-fit" />
        </div>
        <div className="flex justify-evenly bg-Darkblue  rounded-md">
          <div className="flex flex-col my-5">
            <p>self care</p>
            <p>7hrs</p>
          </div>
          <div className="flex flex-col ml-4  my-5">
            <div className="flex justify-end">
              <img src={ellipse} alt="/" className="h-1 w-5" />
            </div>
            <p className="pt-4 text-sm">Last Month - 11hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monthly;