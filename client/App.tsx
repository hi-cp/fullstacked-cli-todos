import React, { useRef } from "react";
import Todo from "./Todo";
import useAPI from "@fullstacked/webapp/client/react/useAPI";
import { client } from "./client";


export default function() {
    const [todos, reloadTodos] = useAPI(client.get().list);
    const inputRef = useRef<HTMLInputElement>();


    const addTodo = async () => {
        if(!inputRef.current.value) return;

        await client.post().create({
            title: inputRef.current.value,
            completed: false
        });
        inputRef.current.value = "";
        reloadTodos()
    }

    return <>
        <h1>A Todo App</h1>
        {todos?.map(id => <Todo key={id} id={id} didDelete={reloadTodos} />)}
        <form onSubmit={e => {e.preventDefault();addTodo()}}>
            <input ref={inputRef} type="text" />
            <button>Add Todo</button>
        </form>
    </>
}