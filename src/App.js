import Navbar from './Sections/Navbar/navbar';
// import Search from './Components/Search/search';
import Artist from './Pages/Artists/Artist';
// import logo from "./logoimg.png"
import Footer from './Sections/Footer/footer'
import Header from './Components/Header/header';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar />
        <Artist />
        {/* <Footer /> */}
        {/* <Header /> */}

      </header>
    </div>
  );
}

export default App;
