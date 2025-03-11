import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Pricing from "./Pricing";
function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = App;
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
      Component = App;
  }
  return (
    <div>
      <NavBar />
      <Component />
    </div>
  );
}

export default App;
