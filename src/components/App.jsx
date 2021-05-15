import React from "react";
import Login from "./Login";

//the goal is to dynamically render different things when certain conditions are met.
//The below is how it is done using traditional if-else statements.

// var isLoggedIn = false;

// function renderConditonally() {
//   if (isLoggedIn === true) {
//     return (<h1>Hello</h1>);
//   } else {
//     return (<form className="form">
//       <input type="text" placeholder="Username" />
//       <input type="password" placeholder="Password" />
//       <button type="submit">Login</button>
//     </form>);
//   }
// }

// function App() {
//   return (
//     <div className="container">
//       {/* <h1>Hello</h1>
//       <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form> */}
//       {renderConditonally()}
//     </div>
//   );
// }

//But in React, how do we do it?

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <Login />
    </div>
  );
}

export default App;
