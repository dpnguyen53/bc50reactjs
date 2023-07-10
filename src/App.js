// import Baitap1 from "./baitap1";
// import Baitap2 from "./baitap2";
import RederingElement from "./rendering-elements";
import HandlingEvents from "./handling-events";
import DemoState from "./state";
import Car from "./car";
import ListKey from "./list-key";
import Communicate from "./communicate";
import LiftingStateUpCart from "./shopping-cart";
// import Home from "./user-managment";
import Home from "./user-managment-redux";
import FormValidation from "./form-validation";
import Lifecycle from "./lifecycle";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);

  return (
    <>
      <RederingElement />
      <hr />
      <HandlingEvents />
      <hr />
      <DemoState />
      <hr />
      <Car />
      <hr />
      <ListKey />
      <hr />
      <Communicate />
      <hr />
      <LiftingStateUpCart />
      <hr />
      <Home />
      <hr />
      <FormValidation />
      <hr />
      <button className="btn btn-danger" onClick={() => setState(true)}>
        Destroy component Lifecyle
      </button>
      {!state && <Lifecycle />}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
