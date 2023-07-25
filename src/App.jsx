import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MyProfile from './components/MyProfile/MyProfile';
import Missions from './components/Missions/Missions';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/myProfile' element={<MyProfile />}/>
        <Route path='/missions' element={<Missions />}/>
      </Routes>
    </>
  )
}

export default App
