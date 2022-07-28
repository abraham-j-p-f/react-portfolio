import { Outlet } from "react-router-dom";
import Navbar from "./navBar";

export default function Layout() {
  return (
    <div className="w-full min-h-screen bg-black overflow-hidden">
      <Navbar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
