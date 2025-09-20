import { createSlice ,nanoid} from "@reduxjs/toolkit";
// "nanoid " only generate unique id's

const initialState={
    todos:[{
        id:1,
        text:"Hello World"
    }]
}
export  const todoSlice= createSlice({
    name:'todo', // name could be any name 
    initialState, // we can declare and then only declare here or we can initialize all value here 
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(), // nano id provide a speific id to each "todo"
                text:action.payload /* through action i can access my todo values and then through
                "payload.text" i can access  my text
                */
            }
            state.todos.push(todo)
        }, /* when we use "addTodo" then it give access to "two" things one is "state" and 2nd is "action" 
         "state" give access to all value of initial state and "action" give access to "all values of initialState" to remove specific 
         value from initialState
        */
        removeTodo:(state, action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
           const {id,text}=action.payload;
           const todoUpdate=state.todos.find((todo)=>todo.id===id)
           if(todoUpdate){
            todoUpdate.text=text;
           }
        },
        deleteTodo:(state,action)=>{
            const{id,text}=action.payload;
            state.todos=state.todos.filter((todo)=>todo.id!==id)
        }
    }
})


export const {addTodo,removeTodo,updateTodo,deleteTodo}=todoSlice.actions;
export default todoSlice.reducer;