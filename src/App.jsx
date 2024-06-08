import Header from "./components/Header";
import Home from "./components/Home";
import data from "./data.json";

function App() {
  const massage = data.notifications.filter(
    (notification) => notification.isUnread === true
  ).length;

  return (
    <>
      <div className="max-w-[730px] bg-white px-8 pt-8 pb-4">
        <Header massage={massage} />
        <Home />
      </div>
    </>
  );
}

export default App;
