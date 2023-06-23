import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import SeriesDetail from '../pages/SeriesDetail'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/show/:id' element={<SeriesDetail />} />
    </Routes>
  )
}
export default RoutesIndex
