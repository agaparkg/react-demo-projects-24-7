import React, { Component } from "react";

class Team extends Component {
  constructor(props) {
    super(props);
  }

  handleVoteIncrease = (teamId) => {
    console.log("yay", teamId);
  };

  render() {
    const { id, name, img, count } = this.props;

    return (
      <div className="box">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <button
          onClick={() => {
            this.handleVoteIncrease(id);
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
