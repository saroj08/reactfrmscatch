import {EventEmitter } from 'events';
import dispatcher from "../dispatcher";
export class Todostore  extends EventEmitter {
    constructor(){
        super();
        this.todos=[
  {
    task:'make react tutorial',
    isCompleted:false
  },
  {
    task:'eat dinner',
    isCompleted:true
  }
] }
// createtodos(){
//      console.log("saroj")
//     const id= Date.now();
//     this.todos.push({
//         id,
//         task:"new",
//         isCompleted:false,
//     })
//     this.emit('change');
// }
getall() {
     console.log("saroj");
    console.log(this.todos)
    return this.todos;
}
handle(action){
    switch(action.type){
        case "create":{
            this.createtodos(action.task);
        }
    }

}

    }
   const todostore =new  Todostore();
   dispatcher.register(todostore.handle.bind(todostore))
   window.todostore=todostore;
    window.dispatcher=dispatcher;

   export default  todostore; 
