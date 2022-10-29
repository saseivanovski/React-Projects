import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <Link to={"firstPage"}>HERE 1</Link>
        <Link to={`secondPage`}>HERE 2</Link>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
