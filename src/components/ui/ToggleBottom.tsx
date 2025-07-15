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
        className=" flex justify-center items-center"
      >
        <div>{theme === "dark" ? <SunDimIcon /> : <MoonIcon />}</div>
      </button>
    </div>
  );
}
