import {Routes, Route} from 'react-router-dom';
import { AndroidApk, Home, Update } from '../pages';

const AppRouter = () => {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/update/ai-development' element={<Update />} />
    <Route path='/download/android' element={<AndroidApk />} />
  </Routes>
  )
}

export default AppRouter