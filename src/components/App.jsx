import React from "react";
import Login from "./Login";

//the goal is to dynamically render different things when certain conditions are met.
//The below is how it is done using traditional if-else statements.

var isLoggedIn = false;

function renderConditonally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

//Is it possible to carry out the render functionality inline?
//Yes, but there is a problem.
//The If statement is in curly BroadcastChannel, which would make react see it as a statement, instead of an expression.
//We can use the Ternary Operator

function App() {
  return <div className="container">{renderConditonally()}</div>;
}

//But in React, how do we do it?

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <Login />
//     </div>
//   );
// }

export default App;
