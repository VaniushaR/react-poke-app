import {Component} from 'react'
import './Bikes.css'
class Bikes extends Component {

  constructor(props) {

    super(props);

     this.state = {

      make: "Yamaha",

      model: "R15",

      color: "red"

    };

  }

  changeBikeColor = () => {

    this.setState({color: "black"});

  }

  render() {

    return (

      <div>

        <h2>My {this.state.make}</h2>

        <p className={this.state.color}>

          It is a {this.state.color}

          {this.state.model}.

        </p>

        <button

          type="button"

          onClick={this.changeBikeColor}

        >Change color</button>

      </div>

    );

  }

}

export {Bikes};