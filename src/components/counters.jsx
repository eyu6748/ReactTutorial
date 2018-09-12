import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {


  render() {

    //Arguement destructuring --Makes syntax asimpler, removes the need the reference to own, child or parent.
    const {
      onReset, counters, onDelete, onIncrement
    } = this.props;

    return (
      <div>
        <button 
        onClick={onReset} 
        className="btn btn-primary btn-sm">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            //key is used internally, can't used it outside
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
