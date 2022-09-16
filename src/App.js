import'./App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Recommended from './Components/Recommended/Recommended';
import SearchPage from './Components/SearchPage/SearchPage';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <>
              <Header />
              <div className='app__mainpage'>
                  <Sidebar />
                  <Recommended/>
              </div>
              </>
            } />
            <Route path='/search/:searchQuery' element={
            <>
              <Header />
              <div className="app__mainpage">
                <Sidebar />
                <SearchPage />
              </div>
            </>
          } />

          <Route path='/video/:videoId' element={
            <>
              <Header />
              <div className="app__mainpage">
                <Sidebar />
                <VideoPlayer />
              </div>
            </>
          } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
