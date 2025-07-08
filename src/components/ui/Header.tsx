import { PlaneLanding } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router";
import { Pages } from "../../configs/router.config";
import { ToggleButton } from "./ToggleBottom";
import { useLocation } from "react-router";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="w-[90%] flex justify-between items-center bg-white px-10 py-3 rounded-full dark:bg-neutral-700 text-black dark:text-neutral-200 max-sm:px-3 max-sm:w-[99%] max-sm:text-sm">
      <Link to={Pages.BASE} className="flex text-amber-500 gap-1">
        Sky
        <PlaneLanding />
        Tracker
      </Link>
      <div className="flex gap-2 ">
        <Link
          to={Pages.BASE}
          className={pathname === Pages.BASE ? "text-amber-600" : ""}
        >
          Home
        </Link>
        <Link
          to={Pages.FOLLOW}
          className={pathname === Pages.FOLLOW ? "text-amber-600" : ""}
        >
          Follow
        </Link>
      </div>
      <ToggleButton />
    </header>
  );
}

export default memo(Header);
