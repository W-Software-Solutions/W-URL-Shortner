import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Blog from './Components/Blog.tsx'
import BlogDetail from './Components/BlogDetail.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element= {<App/>}  />
        {/* <Route path='/about' element= {</>}  /> */}
        <Route path='/blog' element= {<Blog/>}  />  
        <Route path="/blog/:id" element={<BlogDetail />} />

      </Routes>
    
    </Router>
  </StrictMode>,
)
