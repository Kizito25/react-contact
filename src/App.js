import React, { Component } from "react";
import ListContats from "./ListContacts";

const contacts = [
  {
    id: "karen",
    name: "Karen Isgrigg",
    handle: "karen_isgrigg",
    avatarURL: "http://localhost:5001/karen.jpg",
    gone: Boolean,
  },
  {
    id: "richard",
    name: "Richard Kalehoff",
    handle: "richardkalehoff",
    avatarURL: "http://localhost:5001/richard.jpg",
    gone: Boolean,
  },
  {
    id: "tyler",
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    avatarURL: "http://localhost:5001/tyler.jpg",
    gone: Boolean,
  },
];
const hasGone = [
  { name: "karen", isGone: "yes" },
  { name: "richard", isGone: "no" },
  { name: "tyler", isGone: "yes" },
];


class App extends Component {
  render() {
    return (
      <div>
        <ListContats contacts={contacts} hasGone={hasGone} />
      </div>
    );
  }
}
export default App;
