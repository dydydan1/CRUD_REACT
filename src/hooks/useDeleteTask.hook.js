import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";

const deleteTask = async (taskId) => {
  const token = Cookies.get("token");

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}tasks`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        _id: taskId,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to delete task"
    );
  }

  return data;
};

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fetchTasks"],
      });
    },

    onError: (error) => {
      console.error(
        "Failed to delete task:",
        error.message
      );
    },
  });
}