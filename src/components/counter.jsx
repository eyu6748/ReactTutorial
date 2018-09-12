import React, { Component } from "react";

export default class Counter extends Component {

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps, "prevProps");
    console.log(prevState, 'prevState');

  }
  render() {
    console.log("counters rendered!");
    //this.getBadgeClasses();

    return (
      <div>
        <h6>{this.props.counter.id}</h6>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment ME
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} 
        className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }


  formatCount() {
    const { value } = this.props.counter;
    //console.log(value);
    return value === 0 ? "Zero" : value;
  }
}
