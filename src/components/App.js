import React from "react";
import Header from "./Header";

function App(){
  const name1 ="Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      <h3>3a</h3>
      <h3>{name1} and {name2}</h3>
      <p><em>Firebase entries not saving!</em></p>
      {/* A COMMENT :) */}
      <hr />
    </React.Fragment>
  );
}

export default App;
