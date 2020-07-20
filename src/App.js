import React,{Component} from 'react';

import './App.css';



class App extends Component {

   state={
     name:"BOUDJI",
     winner:false
  }



  render(){
   const condition=(this.state.winner)?(<h1>BRAVO {this.state.name}</h1>):(<h1>Raté {this.state.name} !!!</h1>) 
    return (
      <div className="App">
        {condition}
      </div>
    );
  }

}

export default App;
