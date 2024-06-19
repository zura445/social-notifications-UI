export default function Home({ notifications, setNotifications }) {
  const handleNotificationClick = (id) => {
    const newNotifications = notifications.map((notification) =>
      notification.id === id
        ? { ...notification, isUnread: false }
        : notification
    );
    setNotifications(newNotifications);
  };

  return (
    <div className="flex flex-wrap flex-col mt-7">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification mt-2 flex rounded-lg cursor-pointer ${
            notification.isUnread ? "bg-lightGreen" : ""
          }`}
          onClick={() => handleNotificationClick(notification.id)}
        >
          <div className="notification-details flex items-center my-2 ml-5 flex-row justify-between w-full pr-2">
            <div className="flex items-center">
              <img
                src={notification.profilePicture}
                alt={notification.name}
                className="w-[45px] h-[45px]"
              />
              <div className="ml-5">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="">
                      <h3 className="text-black font-black text-lg">
                        {notification.name}
                        <span className="ml-2 text-lightGray">
                          {notification.action}
                          {notification.content && (
                            <span className="ml-2">{notification.content}</span>
                          )}
                        </span>
                      </h3>
                      {notification.group && (
                        <p className="text-blue font-bold text-lg">
                          {notification.group}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-mdGray">
                  <p>{notification.time}</p>
                </div>
                {notification.text && (
                  <div className="border-2 p-5 mt-3">{notification.text}</div>
                )}
                {notification.userPicture && (
                  <img
                    src={notification.userPicture}
                    alt="User picture"
                    className="w-[45px] h-[45px] mt-3"
                  />
                )}
              </div>
            </div>
            {notification.isUnread && (
              <div className="relative flex-shrink-0 top-0 right-0 w-[0.5rem] h-[0.5rem] bg-red-700 rounded-full"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
