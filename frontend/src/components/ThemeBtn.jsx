import { useColorScheme } from "@mui/joy/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function ThemeBtn() {
  const { mode, setMode } = useColorScheme();
  const handleToggleMode = () => setMode(mode === "dark" ? "light" : "dark");
  return (
    <button
      style={{ background: "transparent", border: "none", cursor: "pointer" }}
      onClick={handleToggleMode}
    >
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </button>
  );
}

export default ThemeBtn;
