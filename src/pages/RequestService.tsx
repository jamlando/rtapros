import React from 'react'
import { ServiceRequestForm } from '../components/ServiceRequestForm'

export function RequestService() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Request Service</h1>
        <p className="text-muted-foreground mb-8">
          Fill out the form below to request a service. We'll get back to you as soon as possible.
        </p>
        <ServiceRequestForm />
      </div>
    </div>
  )
} 