let userInput = prompt("What will you like to do?");
const todo = ["Collect eggs", "Feed Chickens"];
while(userInput !== "quit" && userInput !== "q"){
    if(userInput === "list"){
        console.log("**************");
        for(let i= 0; i<todo.length; i++){
            console.log(`${i}:${todo[i]}`);
        }
        console.log("**************");
    }
    else if (userInput === "new"){
        const newTodo = prompt("OK, add new todo");
        todo.push(newTodo);
        console.log(`${newTodo} added to list`);
    }
    else if (userInput === "delete"){
        const delIndex = parseInt(prompt("OK, select index to remove"));
        if (!Number.isNaN(delIndex)){
            const removed = todo.splice(delIndex, 1);
            console.log(`${removed[0]} removed from list`);
        }else{
            console.log("Unknown Index");
        }
    }
    userInput = prompt("What will you like to do?");
}
console.log("Ok, You quit the app!!")