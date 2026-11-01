import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

const fetchTasks = async ({ queryKey }) => {
  const [
    ,
    {
      order = "asc",
      limit = 5,
      page = 1,
    },
  ] = queryKey;

  const token = Cookies.get("token");

  const url = new URL(
    `${import.meta.env.VITE_API_URL}/tasks`
  );

  url.searchParams.set("order", order);
  url.searchParams.set("limit", limit);
  url.searchParams.set("page", page);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch tasks"
    );
  }

  return data;
};

export function useFetchTask(params = {}) {
  const user = Cookies.get("user");

  let userData = null;

  try {
    userData = user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Invalid user cookie:", error);
  }

  const userId =
    userData?._id ||
    userData?.id ||
    userData?.email ||
    null;

  return useQuery({
    queryKey: ["fetchTasks", params, userId],
    queryFn: fetchTasks,
    placeholderData: (previousData) => previousData,
    enabled: !!Cookies.get("token") && !!userId,
  });
}