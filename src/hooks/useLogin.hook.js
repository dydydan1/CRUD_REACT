import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

const LoginUser = async (user) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    }
  );

  const data = await response.json();

  console.log("LOGIN API RESPONSE:", data);

  if (!response.ok) {
    throw new Error(
      data.message || "Login failed"
    );
  }

  return data;
};

export function useLogin() {
  return useMutation({
    mutationFn: LoginUser,

    onSuccess: (response) => {
      console.log("LOGIN SUCCESS RESPONSE:", response);

      // Get login data
      const loginData = response.data ?? response;

      // Save token
      Cookies.set(
        "token",
        loginData.accessToken,
        {
          expires: 1,
          secure: false,
          sameSite: "strict",
        }
      );

      // Save user information
      Cookies.set(
        "user",
        JSON.stringify({
          firstName: loginData.firstName,
          lastName: loginData.lastName,
          email: loginData.email,
        }),
        {
          expires: 1,
        }
      );

      console.log("Token saved!");
      console.log("User saved!");
    },

    onError: (error) => {
      console.error(
        "Login failed:",
        error.message
      );
    },
  });
}