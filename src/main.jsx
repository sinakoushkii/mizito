import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { theme, prefixer, stylisRTLPlugin } from "../src/theme/theme.js";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// Create RTL cache
const cacheRtl = createCache({
  key: "mui-rtl",
  stylisPlugins: [stylisRTLPlugin, prefixer],
});

createRoot(document.getElementById("root")).render(
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </CacheProvider>
);
