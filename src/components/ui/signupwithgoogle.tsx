"use client";
import { useGoogleLogin, TokenResponse } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import Cookies from "js-cookie";


const HOST = process.env.NEXT_PUBLIC_HOST || "http://localhost:8000";

const setSecureCookie = (name: string, value: string, days: number) => {
  Cookies.set(name, value, {
    expires: days,
    path: "/",
    secure: true,
    sameSite: "Strict",
  });
};

const OAuth: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  const responseGoogle = useCallback(
    async (authResult: TokenResponse) => {
      setLoading(true);
      try {
        if (authResult.code) {
          const res = await fetch(`${HOST}/api/user/registrationwithgoogle`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Cross-Origin-Opener-Policy": "same-origin",
            },
            body: JSON.stringify({ tokenId: authResult.code }),
          });

          const data = await res.json();

          if (data.success && data.access_token) {
            setSecureCookie("access_token", data.access_token, 7);
            localStorage.setItem("access_token", data.access_token);
            dispatch(login(data.user_info));
            router.push("/");
          } else {
            dispatch(logout());
            dispatch(showAlert({ message: data?.message || "Login failed", type: "error" }));
          }
        }
      } catch (err) {
        console.error("Google login error:", err);
        dispatch(showAlert({ message: "Something went wrong!", type: "error" }));
      } finally {
        setLoading(false);
      }
    },
    [dispatch, router]
  );

  const signupWithGoogle = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div>
      <button
        className="bg-red-700 text-white p-3 rounded-lg w-full hover:opacity-95 transition disabled:opacity-75"
        type="button"
        onClick={() => signupWithGoogle()}
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in with Google"}
      </button>
    </div>
  );
};

export default OAuth;
