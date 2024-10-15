import { Component } from "react";
import "./App.css";
import { teams } from "./assets/teams";
import Team from "./components/Team";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: teams,
    };
  }

  render() {
    const { teams } = this.state;

    return (
      <div className="container">
        {teams.map((team) => (
          <Team key={team.id} {...team} />
        ))}
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
