import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import ChooseBlock from "./pages/ChooseBlock/ChooseBlock";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ChooseBlock} />
      <Route path={"/:word"} component={Home} />
    </Switch>
  );
}

export default App;
