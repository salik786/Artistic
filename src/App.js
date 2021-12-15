import Navbar from './Sections/Navbar/navbar';
// import Search from './Components/Search/search';
import Artist from './Pages/Artists/ArtistPage';
// import logo from "./logoimg.png"
import { Routes, Route } from "react-router-dom"
import Footer from './Sections/Footer/footer'
import Header from './Sections/Header/header';
import FavEventsPage from './Pages/FavouriteEvents/FavEventsPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar />
        <Routes>
          {/* <Artist /> */}
          {/* <FavEventsPage /> */}
          {/* <Route path="/" element={<Home />}> */}
          <Route path="/" element={<Artist />} key={document.location.href} />
          <Route path="/favourite" element={<FavEventsPage />} key={document.location.href}></Route>
        </Routes >
        {/* <Footer /> */}
        {/* <Header /> */}

      </header>
    </div>
  );
}

export default App;
