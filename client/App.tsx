import React from "react";
import Todo from "./Todo";

const todos = [
    "foo",
    "bar"
]

export default function() {
    return <>
        <h1>A Todo App</h1>
        {todos.map(todo => <Todo todo={todo} />)}
        <form>
            <input type="text" />
            <button>Add Todo</button>
        </form>
    </>
}