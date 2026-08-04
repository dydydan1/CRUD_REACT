import {Card} from "@/components/ui/card";
import styles from "./taskSidebar.module.css";
import {UserProfile} from "@/components/userProfile/userProfile.jsx";
import {CreateTaskForm} from "@/components/createTaskForm/createTaskForm.jsx";
import {Logout} from "@/components/logout/logout.jsx";
export function TaskSidebar(){
    return(
        <section className={`${styles.sidebarHeight} fixed right-4 top-4`}>
            <Card className="flex flex-col h-full w-full p-6 justify-between">
                <UserProfile />
                <CreateTaskForm />
                <Logout />
            </Card>
        </section>
    )
}