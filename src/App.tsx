import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Company from './pages/Company'
import Industries from './pages/Industries'
import IndustryDetail from './pages/IndustryDetail'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}
function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <span className="eyebrow">
          <i /> PAGE NOT FOUND
        </span>
        <h1>This page took a little detour.</h1>
        <p>Let's get you back on track.</p>
        <a className="button button-primary" href="/">
          Back home
        </a>
      </div>
    </main>
  )
}
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-company" element={<Company />} />
        <Route path="/our-work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
