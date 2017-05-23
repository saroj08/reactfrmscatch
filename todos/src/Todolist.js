
import React from 'react';
import Todolistitem from './Todolistitem';
import _ from 'lodash';
 class Todolist extends React.Component{
  renderitems(){
     const props=_.omit(this.props.todos,'todos')
     
      return _.map(this.props.todos,(todo,index)=>
      <Todolistitem key={index} {...todo} {...this.props}/>)
  }
    
     render() {
   console.log(this.props);
    return (
           <div>
          <table>
              <thead>
                  <tr>
                      <th>task</th><th> action</th>
                  </tr>

              </thead>
              <tbody>
                  {this.renderitems()}
              </tbody>
          </table>
           </div>
    )
  }
}

export default Todolist;