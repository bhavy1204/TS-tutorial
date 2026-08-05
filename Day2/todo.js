import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface({ input, output });
let array = [];
function addTodo(title, description) {
    const todo = {
        id: array.length + 1,
        title,
        createdOn: new Date().toISOString().split("T")[0],
        completed: false,
        completedOn: null,
    };
    if (description !== undefined) {
        todo.description = description;
    }
    array.push(todo);
    return "Task added";
}
function listTodo() {
    console.log(array);
}
function toggleTodo(id) {
    const todo = array.find((t) => t.id === id);
    if (!todo) {
        return "No task with ID found";
    }
    todo.completed = !todo.completed;
    todo.completedOn = todo.completed
        ? new Date().toISOString().split("T")[0]
        : null;
    return "Task mark as done";
}
function deleteTodo(id) {
    array = array.filter((todo) => todo.id !== id);
}
async function main() {
    let choice = 0;
    do {
        console.log("=======================================");
        console.log("1. add todo ");
        console.log("2. list todo");
        console.log("3. toggle");
        console.log("4. delete");
        console.log("5. exit");
        choice = Number(await rl.question("choice >> "));
        if (choice === 1) {
            let title = await rl.question("tite: ");
            let description = await rl.question("desc: ");
            console.log(addTodo(title, description));
        }
        if (choice === 2) {
            listTodo();
        }
        if (choice === 3) {
            let id = Number(await rl.question("Task id: "));
            console.log(toggleTodo(id));
        }
        if (choice === 4) {
            let id = Number(await rl.question("Task id: "));
            console.log(deleteTodo(id));
        }
    } while (choice !== 5);
    rl.close();
}
main();
//# sourceMappingURL=todo.js.map