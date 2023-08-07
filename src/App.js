// import logo from "./logo.svg";
import "./App.css";
import cohen_head from "/Users/mbailey/myfirstreactapp/src/cohen_face.jpeg";
import Grid from "./Grid";
import Disco_button from "./Disco_button";
import { useState } from "react";
import discoball from "/Users/mbailey/myfirstreactapp/src/discoball.png";

function App() {
  const [party, setParty] = useState(false);
  console.log(party);
  //const handlePress = () => setParty((prevParty) => !prevParty);
  const handlePress = () => {
    setParty((prevParty) => !prevParty); // Toggle the value of 'party' when the button is clicked
  };

  // const goBack = () =>
  //   setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          animation: party ? "rainbow-background 2s infinite" : "",
        }}
      >
        <button title="disco">
          <img
            src={discoball}
            alt="my image"
            onClick={handlePress}
            style={{ height: "80px", width: "80px" }}
          />
        </button>
        <h1 style={{ color: "pink" }}>
          {party ? "partaaaaaaaaaaay time!!!" : "press the discoball to party"}
        </h1>
        <Grid partyMode={party} />

        <p>
          <h1></h1>
        </p>
      </header>
    </div>
  );
}

export default App;
