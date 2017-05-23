import React from 'react';

 class Todolistitem extends React.Component{
     constructor(props){
         super(props);
         this.state={isediting:false}
     }
  renderactionsection(){
      if(this.state.isediting==true){
          return(
              <td>
                 <button onClick={this.saveit.bind(this)}>save</button>
                 <button onClick={this.oncancel.bind(this)}>cancel</button>
              </td>
          )
          
      }
      return(
             <td>
                 <button onClick={this.onedit.bind(this)}>edit</button>
                     <span> <input type="button"   value="Remove" className="btn btn-md btn-danger col-offset-md-4" onClick={this.props.delete.bind(this,this.props.task)}/></span>
              </td>
      )
  }
  saveit(event){
      console.log("item");
      event.preventDefault();
      const oldtask=this.props.task;
      const oldtid=this.props[this.props.task];
      console.log(this.oldtid);
      const newtask=this.refs.editinput.value;
      this.props.savetask(oldtask,newtask);
      this.setState({isediting:false});

  }
  onedit(){
      this.setState({isediting:true});
  }
   oncancel(){
      this.setState({isediting:false});
  }
  rendertasksection(){
      const {task,isCompleted}=this.props;
      const taskstyle={
          color:isCompleted ? 'red':'green'
      }
      if(this.state.isediting){
      return (<td> 
          <form onSubmit={this.saveit.bind(this)}>
              <input type="text" defaultValue={task} ref="editinput"/>
          </form>
              </td>)}
      return(<td
        onClick = {this.props.toggletask.bind(this,task)} style={taskstyle}>{task}</td>)
  }
    
     render() {
console.log(this.props);
    return (
         <tr>
             
                 {this.rendertasksection()}
        
               { this.renderactionsection()}
             </tr>
    )
  }
}

export default Todolistitem;