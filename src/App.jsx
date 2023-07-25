import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';
import MissionsPage from './pages/MissionsPage/MissionsPage';
import RocketsPage from './pages/RocketsPage/RocketsPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes path="/rockets" element={<RocketsPage />}>
        <Route path='/rockets' element={<RocketsPage />}/>
        <Route path='/myProfile' element={<MyProfilePage />}/>
        <Route path='/missions' element={<MissionsPage />}/>
      </Routes>
    </>
  )
}

export default App
