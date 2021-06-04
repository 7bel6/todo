import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
