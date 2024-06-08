import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import data from "./data.json";

function App() {
  const [notifications, setNotifications] = useState(data.notifications);

  const markAllAsRead = () => {
    console.log("markAllAsRead called");
    const updatedNotifications = notifications.map((notification) => {
      return { ...notification, isUnread: false };
    });
    setNotifications(updatedNotifications);
  };

  const massage = notifications.filter(
    (notification) => notification.isUnread
  ).length;

  return (
    <>
      <div className="max-w-[730px] bg-white px-8 pt-8 pb-4">
        <Header massage={massage} markAllAsRead={markAllAsRead} />
        <Home notifications={notifications} />
      </div>
    </>
  );
}

export default App;
