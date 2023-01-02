import { Fragment } from "react";
import Cart from "./compontents/Cart/Cart";
import Header from "./compontents/Layout/Header";
import Meals from "./compontents/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
