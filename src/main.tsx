import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/ui/Layout.tsx";
import { Pages } from "./configs/router.config.ts";
import "./index.css";
import { Follow } from "./pages/Follow/Follow.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { ThemeProvider } from "./providers/theme/ThemeProvider.tsx";
import { store } from "./store/index.ts";
import { Profile } from "./pages/Profile/Profile.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path={Pages.BASE} element={<Home />} />
              <Route path={Pages.FLIGHT_INFO} element={<Home />} />
              <Route path={Pages.FOLLOW} element={<Follow />} />

              <Route path={Pages.PROFILE} element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
