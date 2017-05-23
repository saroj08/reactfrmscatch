import dispatcher from "./dispatcher";
export function createtodos(text){
    dispatcher.dispatch({
        type:"create",
        text,
    })

}