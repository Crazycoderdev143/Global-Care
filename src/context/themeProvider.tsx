"use client";

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {applyDeviceTheme} from "@/redux/Slices/themeSlice";
import {RootState} from "@/redux/store";

export default function ThemeInitializer() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    if (theme === "device") {
      // Detect system preference once at mount
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      dispatch(applyDeviceTheme(systemTheme));
    }
  }, [theme, dispatch]);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else if (theme === "device") {
      // Handler to toggle dark class on system preference change
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleChange = (event: MediaQueryListEvent) => {
        if (event.matches) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      };

      // Initial set
      if (mediaQuery.matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [theme]);

  return null;
}
