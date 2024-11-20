
import './App.css'
import Editor from './components/Editor'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
function App() {
 

  return (
    <>
      <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/editor/:docId" element={<Editor />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
    </>
  )
}

export default App
