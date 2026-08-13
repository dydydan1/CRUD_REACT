import { createContext, useState } from "react";

export let TasksContext = createContext({
    tasks: undefined,
    setTasks: () => {},
})


export let TasksContextProvider = (props) => {
    
    let [tasks, setTasks] = useState();

    return (
        <TasksContext.Provider value={{tasks: tasks, setTasks: setTasks}}>
            {props.children}
        </TasksContext.Provider>
    )
};