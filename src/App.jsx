import "./App.css";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="relative">
      <NavBar />
      <Home />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
