// // components/ui/ThemeToggle.tsx
// "use client";

// import {useDispatch, useSelector} from "react-redux";
// import {toggleTheme} from "@/redux/Slices/themeSlice";
// import {RootState} from "@/redux/store";
// import {Sun, Moon} from "lucide-react";

// export default function ThemeToggle() {
//   const dispatch = useDispatch();
//   const mode = useSelector((state: RootState) => state.theme.mode);

//   const handleToggle = () => {
//     console.log("mode", mode);
//     dispatch(toggleTheme());
//   };

//   return (
//     <button
//       onClick={handleToggle}
//       className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm"
//     >
//       {mode === "dark" ? (
//         <Sun className="h-5 w-5 text-gray-300" />
//       ) : (
//         <Moon className="h-5 w-5 text-gray-700" />
//       )}
//     </button>
//   );
// }

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
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-cyan-600" />
      )}
    </button>
  );
}
