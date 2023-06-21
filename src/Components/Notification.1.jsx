import React, { useState, useEffect } from "react";
import one from "../images/avatar-mark-webber.webp";
import two from "../images/avatar-angela-gray.webp";
import three from "../images/avatar-jacob-thompson.webp";

const Notification = () => {
  const [countNotification, setCountNotification] = useState(0);

  useEffect(() => {
    const elements = document.getElementsByClassName("unread");
    setCountNotification(elements.length);
  }, []);

  const markAllAsRead = () => {
    const elements = document.getElementsByClassName("unread");
    if (elements.length === 0) return; // Skip if there are no unread notifications

    Array.from(elements).forEach((element) => {
      element.style.display = "none";
      element.style.backgroundColor = "#FFFFF"
      element.classList.remove("unread","bg-uncounted");
      
    });

    setCountNotification(0);
  };

  return (
    <div className="bg-white font-jakarta flex flex-col p-8">
      <div className="top-part flex justify-between pb-8">
        <div className="flex gap-x-4">
          <h1 className="text-2xl font-extrabold">Notifications</h1>
          <span className="counterflex items-center text-white bg-buttoncolor text-lg px-1 rounded">
            {countNotification}
          </span>
        </div>
        <button className="text-grayblue" onClick={markAllAsRead}>
          Mark all as read
        </button>
      </div>
      <div id="notifications">
        <ul className="text-grayblue flex flex-col gap-y-5">
          <li className="flex items-center gap-x-5 bg-uncounted p-4">
            <img src={one} alt="" className="w-16" />
            <div>
              <p className="explanation flex gap-x-2 items-center">
                <span className="user-name font-extrabold text-[#21242e]">
                  Mark Webber
                </span>
                reacted to your recent post{" "}
                <span className="text-darkgrayblue font-extrabold">
                  My first tournament today!
                </span>
                <span className="unread inline-block w-3 h-3 bg-darkred rounded-full opacity-100"></span>
              </p>
              <span>1m ago</span>
            </div>
          </li>
          <li className="flex items-center gap-x-5 bg-uncounted p-4">
            <img src={two} alt="" className="w-16" />
            <div>
              <p className="explanation flex gap-x-2 items-center">
                <span className="user-name font-extrabold text-darkblue">
                  Angela Gray
                </span>
                followed you
                <span className="unread inline-block w-3 h-3 bg-darkred rounded-full opacity-100"></span>
              </p>
              <span>5m ago</span>
            </div>
          </li>
          <li className="flex items-center gap-x-5 bg-uncounted p-4">
            <img src={three} alt="" className="w-16" />
            <div>
              <p className="explanation flex gap-x-2 items-center">
                <span className="user-name font-extrabold text-darkblue">
                  Jacob Thompson
                </span>
                Thompson has joined your group{" "}
                <span className="font-extrabold text-fontblue">Chess Club</span>
                <span className="unread inline-block w-3 h-3 bg-darkred rounded-full opacity-100"></span>
              </p>
              <span>5m ago</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notification;
