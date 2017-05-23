import React from 'react';

 class Createlist extends React.Component{
  submit(event){
      event.preventDefault();
      this.props.createitem(this.refs.createlist.value);
      this.refs.createlist.value="";

  }
    
     render() {

    return (
      <div>
          <form onSubmit={this.submit.bind(this)}>
          <input type="text" placeholder="enter text" ref="createlist"/>
          <button>search</button>
          </form>
      </div>
    )
  }
}

export default Createlist;