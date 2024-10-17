import { Component } from "react";
import "./App.css";
import { teams } from "./teams";
import Team from "./components/Team";
import Header from "./projects/voting-system/components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: teams, // [{count: 0}, {count: 0}]
    };
  }

  handleCountIncrease = (id) => {
    const { teams } = this.state;

    const newTeams = teams.map((team) => {
      if (team.id === id) {
        team.count++;
      }

      return team;
    });

    // const newTeams =
    this.setState({ teams: newTeams });
  };

  render() {
    const { teams } = this.state;

    return (
      <div className="container">
        {teams.map((team) => {
          const props1 = {
            ...team,
            handleVote: this.handleCountIncrease,
          };

          return <Team key={team.id} {...props1} />;
          // return (
          //   <Team
          //     key={team.id}
          //     {...team}
          //     handleVote={this.handleCountIncrease}
          //     name="Alex"
          //     age={100}
          //   />
          // );
        })}
        {/* <Team {...teams[0]} />
        <Team {...teams[1]} />
        <Team {...teams[2]} /> */}
        {/* <Team id={teams[0].id} name={teams[0].name} /> */}
        {/* <Team id={teams[1].id} name={teams[1].name} /> */}
        {/* <Team id={teams[2].id} name={teams[2].name} /> */}
      </div>
    );
  }
}

export default App;
