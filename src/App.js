import React from 'react';
import "./App.css"
import Counter from "./component/counter"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0
    }
  };
  render() {


    return (
      <div className="text-center text-secondary ">
        <h1>Counter</h1>

        <Counter
          count={this.state.count1}
          increment={() => {
            if (this.state.count1 < this.state.count2) this.setState({ count1: this.state.count1 + 1 })
            if (this.state.count1 === this.state.count2) this.setState({ count1: this.state.count1 + 1, count2: this.state.count2 + 1 })
          }}


          substract={() => { if (this.state.count1 > 0) this.setState({ count1: this.state.count1 - 1 }) }}
        />

        <Counter
          count={this.state.count2}
          increment={() => {
            if (this.state.count2 <= this.state.count1) this.setState({ count2: this.state.count2 + 1 })
          }}
          substract={() => {
            if (this.state.count2 > 0) this.setState({ count2: this.state.count2 - 1 })
            if (this.state.count2 === this.state.count1) this.setState({ count2: this.state.count2 - 1, count1: this.state.count1 - 1 })
          }}
        />


      </div>
    );
  };
};
export default App