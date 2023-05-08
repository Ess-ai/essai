import {Routes, Route} from 'react-router-dom';
import { Home, Update } from '../pages';

const AppRouter = () => {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/ai-development' element={<Update />} />
  </Routes>
  )
}

export default AppRouter