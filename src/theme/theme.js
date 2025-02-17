import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";


// RTL Theme
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazirmatn, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
        },
      },
    },
  },
}, faIR);

export { theme, prefixer, stylisRTLPlugin };
