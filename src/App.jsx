import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MyProfile from './components/MyProfile/MyProfile';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/myProfile' element={<MyProfile />}/>
      </Routes>
    </>
  )
}

export default App
