import React, { Component } from "react";

class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, img, count, handleVote } = this.props;

    return (
      <div className="box">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <button
          onClick={() => {
            handleVote(id);
          }}
        >
          Vote
        </button>
        <div className="count">
          Vote count: <span>{count}</span>
        </div>
      </div>
    );
  }
}

export default Team;
