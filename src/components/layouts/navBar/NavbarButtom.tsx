export default function NavbarButtom({handleTogle, toggle}: any) {
  return (
    <div
      onClick={handleTogle}
      className="cursor-pointer fixed z-50 top-10 left-10 flex justify-center items-center"
    >
      <div className="w-10 aspect-square bg-t_blue rounded-full absolute z-20 flex flex-col justify-center items-center text-white">
        <div className="w-5/12 aspect-square relative">
          <div
            className={`absolute transition-all duration-500 top-[1px] w-full h-[2px] bg-t_white rounded-full ${
              toggle ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`absolute transition-all duration-500 top-1/2 -translate-y-1/2 w-full h-[2px] bg-t_white rounded-full ${
              toggle ? "rotate-45 scale-125" : ""
            }`}
          ></div>
          <div
            className={`absolute transition-all duration-500 top-1/2 -translate-y-1/2 w-full h-[2px] bg-t_white rounded-full ${
              toggle ? "-rotate-45 scale-125" : ""
            }`}
          ></div>
          <div
            className={`absolute transition-all duration-500 bottom-[1px] w-full h-[2px] bg-t_white rounded-full ${
              toggle ? "opacity-0" : ""
            }`}
          ></div>
        </div>
      </div>
      <div className="w-10 translate-x-1 translate-y-1 aspect-square bg-t_white-dark rounded-full z-10 absolute flex justify-center items-center"></div>
    </div>
  );
}
