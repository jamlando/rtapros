import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'
import { Home } from './pages/Home'
import DashboardLayout from './components/layout/DashboardLayout'
import Dashboard from './pages/admin/Dashboard'
import ServiceRequests from './pages/admin/ServiceRequests'
import ServiceRequestDetail from './pages/admin/ServiceRequestDetail'
import { ServiceRequestForm } from './components/ServiceRequestForm'
import { MechanicTracking } from './components/MechanicTracking'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/request-service" element={<ServiceRequestForm />} />
          <Route path="/mechanics" element={<MechanicTracking />} />
        </Route>
        <Route path="/admin" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/admin/service-requests" element={<DashboardLayout><ServiceRequests /></DashboardLayout>} />
        <Route path="/admin/service-requests/:id" element={<DashboardLayout><ServiceRequestDetail /></DashboardLayout>} />
      </Routes>
    </Router>
  )
}

export default App
