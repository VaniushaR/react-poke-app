import './App.css';
import {Ninjas} from './Ninjas'
import {Component} from 'react'
import {AddNinja} from './AddNinja'
import {Bikes} from './Bikes'
class App extends Component {
  state = {
    ninjas: [
      {name: "Ryu", age: 30, belt: "black", id:1 },
      {name: "Yoshi", age:33, belt: "red", id:2},
      {name: "Crystal", age: 22, belt: "blue", id:3}
    ]
  }

  addNinja = (ninja) => {
    console.log(ninja, 'from add ninja in app.jsx')
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    //ninjas.push(ninja)
    this.setState({
      ninjas: ninjas
    })
    
  }
  deleteNinja = (ninjaID) => {
    console.log("to delete: ", ninjaID)
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== ninjaID
    })

    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount() {
    console.log("component mounted")
  }

 

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>React class </h1>
      </header>
      <AddNinja addNinja={this.addNinja} />
      <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
      <divider> ----- </divider>
      <Bikes/>

    </div>
    )
  }
}

export default App;
