import useAPI from "@fullstacked/webapp/client/react/useAPI";
import React from "react";
import { client } from "./client";

export default function({id, didDelete}) {
    const [todo, reloadTodo] = useAPI(client.get().get, id);

    const toggleTodo = async () => {
        await client.put().update(id, {
            ...todo,
            completed: !todo.completed
        });
        reloadTodo();
    }

    const deleteTodo = async () => {
        await client.delete().delete(id);
        didDelete();
    }

    return <div className={"todo " + (todo?.completed ? "completed" : "")}>
        <input onChange={toggleTodo} type="checkbox" checked={todo?.completed} />
        {todo?.title}
        {todo?.completed && <button onClick={deleteTodo}>Delete</button>}
    </div>
}