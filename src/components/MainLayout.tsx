import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { ServiceCategory } from './ServiceCategory'
import { serviceCategories } from '../data/services'

export function MainLayout() {
  const handleServiceRequest = (serviceId: string) => {
    // TODO: Implement service request handling
    console.log('Service requested:', serviceId)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
} 