export default function Header({ massage }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-2xl font-extrabold text-darck">Notifications</p>
          <p className="text-base	font-extrabold bg-blue text-white w-8 h-6 flex justify-center items-center rounded-lg ml-3">
            {massage}
          </p>
        </div>
        <p className="text-lightGray font-medium ">Mark all as read</p>
      </div>
    </div>
  );
}
