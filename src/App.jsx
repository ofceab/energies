import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import WhatWeDo from './pages/WhatWeDo'
import Products from './pages/Products'
import Services from './pages/Services'
import WhyKtech from './pages/WhyKtech'
import AboutUs from './pages/AboutUs'
import PartnersCompliance from './pages/PartnersCompliance'
import Insights from './pages/Insights'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-ktech" element={<WhyKtech />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/partners-compliance" element={<PartnersCompliance />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
