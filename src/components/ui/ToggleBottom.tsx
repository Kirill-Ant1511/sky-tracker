import { MoonIcon, SunDimIcon } from "lucide-react";
import { useTheme } from "../../providers/theme/useTheme";
export function ToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => {
          toggleTheme();
        }}
        className="flex gap-2 max-sm:hidden"
      >
        <div
          className={`${
            theme === "dark" ? "bg-black " : ""
          } flex items-center justify-center rounded-full p-2 w-7 h-7 transition-all duration-300`}
        >
          🌗
        </div>
        <div
          className={`${
            theme === "light" ? "bg-neutral-400" : ""
          } flex items-center justify-center rounded-full p-2 w-7 h-7 transition-all duration-300`}
        >
          ☀️
        </div>
      </button>

      <button
        onClick={() => {
          toggleTheme();
        }}
        className="sm:hidden max-sm:visible flex justify-center items-center"
      >
        <div>{theme === "dark" ? <SunDimIcon /> : <MoonIcon />}</div>
      </button>
    </div>
  );
}
