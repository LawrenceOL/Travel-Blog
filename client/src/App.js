import './style/App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage' 
import AboutPage from './pages/AboutPage'
import PostPage from './pages/PostPage'

const App = () => {
  
  return (
    <div className="App">
      
      <Routes >
        <Route  path='/' element={<HomePage />} />
        {/* <Route  path='/about' element={<AboutPage />} /> */}
        <Route path='/post/:id' element={<PostPage />} />
      </Routes>
      
    </div>
  )
}

export default App