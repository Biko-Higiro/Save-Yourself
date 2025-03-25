import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Pricing from "./Pricing";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/Pricing":
      Component = Pricing;
      break;
    case "/About":
      Component = About;
      break;
    case "/Login":
      Component = Login;
      break;
    default:
      Component = Home;
  }
  return (
    <div>
      <NavBar />
      <Component />
    </div>
  );
}

export default App;
