import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
