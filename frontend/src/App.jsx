
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import './styles/app.css';
function App() {
  return (
    <>
      <Navbar/>
      <main className="main-container">
      <Sidebar/>
      <Dashboard/>
      </main>
    </>
  );
}

export default App;
