import { Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Features from './pages/Features.jsx'
import Roadmap from './pages/Roadmap.jsx'
import Transparency from './pages/Transparency.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/transparency" element={<Transparency />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  )
}

export default App