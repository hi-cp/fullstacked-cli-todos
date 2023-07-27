// Server Entrypoint
import Server from "@fullstacked/webapp/server";
import createListener from "@fullstacked/webapp/rpc/createListener";

const server = new Server();
server.start();

export default server.serverHTTP;

type Todo = {
    title: string,
    completed: boolean
}

const todos = new Map<string, Todo>();

export const api = {
    list(){
        return Array.from(todos.keys());
    },
    get(id: string){
        return todos.get(id);
    },
    update(id: string, todo: Todo){
        todos.set(id, todo);
    },
    create(todo: Todo){
        const id = Math.floor(Math.random() * 100000).toString();
        todos.set(id, todo);
        return id;
    },
    delete(id: string){
        todos.delete(id);
    }
}

server.addListener(createListener(api));