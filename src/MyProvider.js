import React, { Component } from "react";
import MyContext from "./context";

class MyProvider extends Component {
  state = {
    name: "John",
    age: 30,
    familyMembers: [
      { name: "John", age: 30 },
      { name: "Jane", age: 28 },
      { name: "Billy", age: 5 },
    ],
  };

  incrementAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  addFamilyMember = (name, age) => {
    this.setState({
      familyMembers: [...this.state.familyMembers, { name, age }],
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          incrementAge: this.incrementAge,
          addFamilyMember: this.addFamilyMember,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
