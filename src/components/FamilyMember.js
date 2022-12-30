import React, { Component } from "react";
import MyContext from "../context";
import "../components/FamilyMember.css";

class FamilyMember extends Component {
  state = {
    name: "",
    age: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.addFamilyMember(this.state.name, this.state.age);
    this.setState({ name: "", age: 0 });
  };

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="familyMember">
            <p>Name: {context.state.name}</p>
            <p>Age: {context.state.age}</p>
            <button onClick={context.incrementAge}>Grow a year older</button>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={this.state.age}
                onChange={this.handleChange}
              />
              <button type="submit">Add Family Member</button>
              <ul>
                {context.state.familyMembers.map((member) => (
                  <li key={member.name}>
                    <div>Name: {member.name} ,</div>
                    <div>Age: {member.age}</div>
                  </li>
                ))}
              </ul>
            </form>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

FamilyMember.contextType = MyContext;

export default FamilyMember;
