  import './App.css';
  import NavBar from './Components/nav bar/navigation';
  import SideBar from './Components/Sidebar/side';
  import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
  import Home from './Components/Pages/Home/home';
  import Ebook from './Components/Pages/Ebook/ebook';
  import Audio from './Components/Pages/Audio/audio';
  import Video from './Components/Pages/Video/video';
  import Magazines from './Components/Pages/Magazines/magazines';
  import MyActivity from './Components/Pages/MyActivity/myactivity';
  import History from './Components/Pages/History/history';
  import Categories from './Components/Pages/Categories/categories';


  function App() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="main-content">
            <SideBar />
            <div className="page-content">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/ebook" element={<Ebook />} />
                <Route path="/audio" element={<Audio />} />
                <Route path="/video" element={<Video />} />
                <Route path="/magazines" element={<Magazines />} />
                <Route path="/myactivity" element={<MyActivity />} />
                <Route path="/history" element={<History />} />
                <Route path="/categories" element={<Categories />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>)
  }

  export default App;
