import "./App.css";
import FormShover from "./components/form";
import Hero from "./components/hero";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Hero />
      <FormShover />
      <ToastContainer />
    </>
  );
}
export default App;
