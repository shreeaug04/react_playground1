import React from 'react';
 
export default class HelloWorld extends React.Component{
    state = {
        who:'world'
    }

    // handleClick = ()=> {
        
    // }

   render() {
    return (
      <div className='HelloWorld'>
        <p>Hello, {this.state.who}!</p>
        <button
          onClick={() => this.setState({ who: 'world' })}
        >World
        </button>
        <br/>
        <button
          onClick={() => this.setState({ who: 'Friend' })}
        >
          Friend
        </button>
        <br />
        <button
          onClick={() => this.setState({ who: 'React' })}
        >
          React
        </button>
      </div>
    )
  }
}