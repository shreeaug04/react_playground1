import React from 'react';
 
class HelloWorld extends React.Component{
    state = {
        who:'world'
    }

    handleClick = ()=> {
        
    }

   render(){
       return(
         <div>
             <p>Hello, {this.state.who}</p>
             <button>World</button>
             <button>Friend</button>
             <button onClick={this.handleClick}>React</button>
         </div>
       )
   }

}
export default HelloWorld;