import React from "react";
import ellipse from "./images/icon-ellipsis.svg";
import work from "./images/icon-work.svg";
import play from "./images/icon-play.svg";
import study from "./images/icon-study.svg";
import exercise from "./images/icon-exercise.svg";
import self from "./images/icon-self-care.svg";
import social from "./images/icon-social.svg";

function Daily() {
  return (
    <div className="text-white">
      <div className="md:flex md:my-5">
        <div className="bg-Lightred flex flex-col my-4 rounded-md    md:mx-5 md:w-48">
          <div className="flex justify-end">
            <img src={work} alt="/" className="w-5 h-6 mx-5  object-fit" />
          </div>
          <div className="flex  justify-evenly bg-Darkblue  rounded-md ">
            <div className="flex flex-col my-5">
              <p>work</p>
              <p>5hrs</p>
            </div>
            <div className="flex flex-col ml-4  my-5">
              <div className="flex justify-end">
                <img
                  src={ellipse}
                  alt="/"
                  className="h-1 w-5 hover:shadow-white hover:shadow-xl"
                />
              </div>
              <p className="pt-4 text-sm">yesterday - 7hrs</p>
            </div>
          </div>
        </div>
        <div className="bg-Softblue flex flex-col my-4 rounded-md    md:mx-5 md:w-48">
          <div className="flex justify-end">
            <img src={play} alt="/" className="w-5 h-6 mx-5 object-fit" />
          </div>
          <div className="flex justify-evenly bg-Darkblue  rounded-md">
            <div className="flex flex-col my-5">
              <p>play</p>
              <p>1hr</p>
            </div>
            <div className="flex flex-col ml-4  my-5">
              <div className="flex justify-end">
                <img src={ellipse} alt="/" className="h-1 w-5 hover:bg-white" />
              </div>
              <p className="pt-4 text-sm">yesterday - 2hrs</p>
            </div>
          </div>
        </div>
        <div className="bg-Light-red flex flex-col my-4 rounded-md    md:mx-5 md:w-48">
          <div className="flex justify-end">
            <img src={study} alt="/" className="w-5 h-6 mx-5 object-fit" />
          </div>
          <div className="flex justify-evenly bg-Darkblue  rounded-md">
            <div className="flex flex-col my-5">
              <p>study</p>
              <p>0hrs</p>
            </div>
            <div className="flex flex-col ml-4  my-5">
              <div className="flex justify-end">
                <img src={ellipse} alt="/" className="h-1 w-5 hover:bg-white" />
              </div>
              <p className="pt-4 text-sm">yesterday - 1hrs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:my-5">
        <div className="bg-Limegreen flex flex-col my-4 rounded-md    md:mx-5 md:w-48">
          <div className="flex justify-end">
            <img src={exercise} alt="/" className="w-5 h-6 mx-5 object-fit" />
          </div>
          <div className="flex justify-evenly  bg-Darkblue  rounded-md">
            <div className="flex flex-col my-5">
              <p>exercise</p>
              <p>1hr</p>
            </div>
            <div className="flex flex-col ml-4  my-5">
              <div className="flex justify-end">
                <img src={ellipse} alt="/" className="h-1 w-5 hover:bg-white" />
              </div>
              <p className="pt-4 text-sm">yesterday - 1hr</p>
            </div>
          </div>
        </div>
        <div className="bg-Violet flex flex-col my-4 rounded-md    md:mx-5 md:w-48">
          <div className="flex justify-end ">
            <img src={social} alt="/" className="w-5 h-6 mx-5  object-fit" />
          </div>
          <div className="flex justify-evenly  bg-Darkblue  rounded-md">
            <div className="flex flex-col my-5">
              <p>social</p>
              <p>1hr</p>
            </div>
            <div className="flex flex-col ml-4  my-5">
              <div className="flex justify-end">
                <img src={ellipse} alt="/" className="h-1 w-5 hover:bg-white" />
              </div>
              <p className="pt-4 text-sm">yesterday - 3hrs</p>
            </div>
          </div>
        </div>
        <div className="bg-Softorange flex flex-col my-4 rounded-md    md:mx-5 md:w-48">
          <div className="flex justify-end">
            <img src={self} alt="/" className="w-5 h-6 mx-5 object-fit" />
          </div>
          <div className="flex justify-evenly bg-Darkblue  rounded-md">
            <div className="flex flex-col my-5">
              <p>self care</p>
              <p>0hrs</p>
            </div>
            <div className="flex flex-col ml-4  my-5">
              <div className="flex justify-end">
                <img src={ellipse} alt="/" className="h-1 w-5 hover:bg-white" />
              </div>
              <p className="pt-4 text-sm">yesterday - 1hr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Daily;
