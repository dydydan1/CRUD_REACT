import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

const LoginUser = async (user) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export function useLogin() {
  return useMutation({
    mutationFn: LoginUser,

    onSuccess: (response) => {
      Cookies.set("token", response.data.accessToken, {
        expires: 1,
        secure: false,
        sameSite: "strict",     
      });

      console.log("Token saved!");
    },

    onError: (error) => {
      console.log(error.message);
    },
  });
}