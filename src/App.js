import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <h1>Home</h1>} />
      <Route path={"/:word"} component={Home} />
    </Switch>
  );
}

export default App;
