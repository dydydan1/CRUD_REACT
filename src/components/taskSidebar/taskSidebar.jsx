import { Card } from "@/components/ui/card";
import styles from "./taskSidebar.module.css";
import { UserProfile } from "@/components/userProfile/userProfile.jsx";
import { CreateTaskForm } from "@/components/createTaskForm/createTaskForm.jsx";
import { Logout } from "@/components/logout/logout.jsx";
import Cookies from "js-cookie";

export function TaskSidebar() {
  const userCookie = Cookies.get("user");

  let user = null;

  if (userCookie) {
    try {
      user = JSON.parse(userCookie);
    } catch (error) {
      console.error("Invalid user cookie:", error);
    }
  }

  return (
    <section
      className={`${styles.sidebarHeight} fixed right-4 top-4`}
    >
      <Card className="flex flex-col h-full w-full p-6 justify-between">
        <UserProfile
          firstName={user?.firstName ?? ""}
        />

        <CreateTaskForm />

        <Logout />
      </Card>
    </section>
  );
}