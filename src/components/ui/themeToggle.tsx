"use client";

import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {toggleTheme} from "@/redux/Slices/themeSlice";
import {Sun, Moon} from "lucide-react";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
      className="app p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
    >
      {mode === "dark" ? (
        <Sun className="app w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="app w-5 h-5 text-cyan-600" />
      )}
    </button>
  );
}
