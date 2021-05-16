import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form
        isRegistered={userIsRegistered}
        //is registered is the prop, but it is used to pass the userIsreg in.
        //brilliant idea.
      />
    </div>
  );
}

export default App;
