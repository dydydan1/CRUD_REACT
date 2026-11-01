import { Card } from "@/components/ui/card";
import styles from "./taskSidebar.module.css";
import { UserProfile } from "@/components/userProfile/userProfile.jsx";
import { CreateTaskForm } from "@/components/createTaskForm/createTaskForm.jsx";
import { Logout } from "@/components/logout/logout.jsx";
import Cookies from "js-cookie";
import { ThemeToggle } from "@/components/themeToggle/themeToggle";

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
        <div className="space-y-4">
          <UserProfile firstName={user?.firstName ?? ""} />
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>

        <CreateTaskForm />

        <Logout />
      </Card>
    </section>
  );
}