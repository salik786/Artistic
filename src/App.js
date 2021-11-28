import Navbar from './Components/Navbar/navbar';
// import Search from './Components/Search/search';
import Artist from './Pages/Artist';
// import logo from "./logoimg.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* {logo} */}
        <Navbar />
        <Artist />


      </header>
    </div>
  );
}

export default App;
