import Navbar from './Components/Navbar/navbar';
// import Search from './Components/Search/search';
import Artist from './Pages/Artists/Artist';
// import logo from "./logoimg.png"
import Header from './Components/Header/header';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar />
        <Artist />
        {/* <Header /> */}

      </header>
    </div>
  );
}

export default App;
