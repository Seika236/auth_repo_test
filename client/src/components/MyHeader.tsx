import { Bell, Grid } from "lucide-react";
import logo from "../images/logo.svg";
export function MyHeader() {
  return (
    <header className="w-full bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">
        <div className="flex-1 flex justify-center sm:justify-start">
          <div className="text-[#1450E0] font-black text-2xl tracking-tighter">
            <img src={logo} alt="logo" width="100" height="40" />
          </div>
        </div>

        <div className="flex-1 md:flex-none items-center justify-end space-x-4 sm:flex hidden">
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <Bell size={20} strokeWidth={1.5} />
          </button>
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <Grid size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
