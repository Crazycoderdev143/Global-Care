"use client";

import {signIn, signOut, useSession} from "next-auth/react";

const providerConfigs = [
  {
    id: "google",
    label: "Google",
    bg: "bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:shadow-md",
    icon: (
      <svg
        className="app w-5 h-5 mr-2"
        viewBox="0 0 48 48"
      >
        <path
          fill="#EA4335"
          d="M24 9.5c3.52 0 6.32 1.47 8.27 3.34l6.15-6.15C34.31 2.61 29.59 0 24 0 14.97 0 7.26 5.85 3.6 14.12l7.48 5.81C12.63 13.63 17.9 9.5 24 9.5z"
        />
        <path
          fill="#34A853"
          d="M46.45 24.5c0-1.48-.13-2.9-.38-4.25H24v8.05h12.7c-.55 2.98-2.21 5.45-4.7 7.13l7.48 5.8C43.96 36.99 46.45 31.33 46.45 24.5z"
        />
        <path
          fill="#FBBC05"
          d="M11.08 28.68A14.5 14.5 0 019.5 24c0-1.63.28-3.19.78-4.68l-7.5-5.81A24 24 0 000 24c0 3.94.94 7.66 2.6 10.98l8.48-6.3z"
        />
        <path
          fill="#4285F4"
          d="M24 48c6.48 0 11.91-2.13 15.88-5.8l-7.48-5.8c-2.04 1.38-4.68 2.2-8.4 2.2-6.1 0-11.37-4.13-13.16-9.81l-8.48 6.3C7.26 42.15 14.97 48 24 48z"
        />
        <path
          fill="none"
          d="M0 0h48v48H0z"
        />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Facebook",
    bg: "bg-[#1877F2] text-white  hover:bg-[#165fce] dark:bg-[#1877F2] dark:text-gray-300 dark:hover:bg-[#165fce]",
    icon: (
      <svg
        className="app w-5 h-5 mr-2"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.67c0 .733.593 1.326 1.325 1.326h11.494V14.7h-3.13v-3.6h3.13V8.41c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.098 2.796.142v3.24h-1.92c-1.504 0-1.795.715-1.795 1.763v2.31h3.59l-.467 3.6h-3.123v9.294H22.67c.733 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.675 0z" />
      </svg>
    ),
  },
];

export default function AuthButton() {
  const {data: session} = useSession();

  return session ? (
    <div className="app text-center">
      <p className="app text-lg font-medium text-gray-900 dark:text-white">
        Welcome {session.user?.username || session.user?.name}
      </p>
      <button
        onClick={() => signOut()}
        className="app mt-3 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-transform duration-300 transform hover:scale-105"
        aria-label="Sign out"
      >
        Logout
      </button>
    </div>
  ) : (
    <div className="app space-y-3">
      {providerConfigs.map(({id, label, icon, bg}) => (
        <button
          key={id}
          onClick={() => signIn(id)}
          className={`app w-full flex items-center justify-center dark:bg-gray-700 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-xl text-sm font-medium transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${bg}`}
          aria-label={`Continue with ${label}`}
        >
          {icon}
          Continue with {label}
        </button>
      ))}
    </div>
  );
}

// performance optimization, efficiency, maintainability, readability security and short code
