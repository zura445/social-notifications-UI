import React from "react";
import data from "../data.json";

export default function Home() {
  return (
    <div className="flex flex-wrap flex-col mt-7">
      {data.notifications.map((notification, index) => (
        <React.Fragment key={notification.id}>
          {index === 3 ? (
            // მეოთხე შვილის სპეციალური დამუშავება
            <div
              className={`notification mt-2 flex items-center rounded-lg ${
                notification.isUnread ? "bg-lightGreen" : "bg-white"
              }`}
            >
              <div className="notification-details flex my-2">
                <img
                  src={notification.profilePicture}
                  alt={notification.name}
                  className="w-[45px] h-[45px] ml-5"
                />
                <div className="ml-5">
                  <div className="flex items-center">
                    <div className="flex">
                      <h3 className="text-black font-black text-lg">
                        {notification.name}
                        <span className="ml-2">
                          {notification.action}
                          <span className="ml-2">{notification.content}</span>
                        </span>
                      </h3>
                    </div>
                    {notification.group && (
                      <p className="ml-2 text-blue font-bold text-lg">
                        {notification.group}
                      </p>
                    )}
                    {notification.isUnread && (
                      <div className="w-2 h-2 bg-red-700 rounded-full mx-3"></div>
                    )}
                  </div>
                  <div className="text-mdGray">
                    <p>{notification.time}</p>
                  </div>
                  <div className="border-2 p-5 mt-3">
                    Hello, thanks for setting up the Chess Club. I've been a
                    member for a few weeks now and I'm already having lots of
                    fun and improving my game.
                  </div>
                </div>
              </div>
            </div>
          ) : index === 4 ? (
            // მეხუთე შვილის სპეციალური დამუშავება
            <div
              className={`notification mt-2 flex items-center justify-between rounded-lg ${
                notification.isUnread ? "bg-lightGreen" : "bg-white"
              } mx-5 my-2`}
            >
              <div className="notification-details flex items-center">
                <img
                  src={notification.profilePicture}
                  alt={notification.name}
                  className="w-[45px] h-[45px]"
                />
                <div className="ml-5">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <h3 className="text-black font-black text-lg">
                        {notification.name}
                        <span className="ml-2 text-lightGray">
                          {notification.action}
                          <span className="ml-2">{notification.content}</span>
                        </span>
                      </h3>
                      {notification.group && (
                        <p className="ml-2 text-blue font-bold text-lg">
                          {notification.group}
                        </p>
                      )}
                      {notification.isUnread && (
                        <div className="w-2 h-2 bg-red-700 rounded-full mx-3"></div>
                      )}
                    </div>
                  </div>
                  <div className="text-mdGray">
                    <p>{notification.time}</p>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src={notification.image}
                  alt={notification.name}
                  className="w-[45px] h-[45px]"
                />
              </div>
            </div>
          ) : (
            // სხვა შვილების ჩვეულებრივი რენდერი
            <div
              className={`notification mt-2 flex items-center rounded-lg ${
                notification.isUnread ? "bg-lightGreen" : "bg-white"
              }`}
            >
              <div className="notification-details flex my-2">
                <img
                  src={notification.profilePicture}
                  alt={notification.name}
                  className="w-[45px] h-[45px] ml-5"
                />
                <div className="ml-5">
                  <div className="flex items-center">
                    <div className="flex">
                      <h3 className="text-black font-black text-lg">
                        {notification.name}
                        <span className="ml-2 text-lightGray">
                          {notification.action}
                          <span className="ml-2">{notification.content}</span>
                        </span>
                      </h3>
                    </div>
                    {notification.group && (
                      <p className="ml-2 text-blue font-bold text-lg">
                        {notification.group}
                      </p>
                    )}
                    {notification.isUnread && (
                      <div className="w-2 h-2 bg-red-700 rounded-full mx-3"></div>
                    )}
                  </div>
                  <div className="text-mdGray">
                    <p>{notification.time}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
