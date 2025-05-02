import React from 'react'
import { ServiceCard } from './ServiceCard'

interface Service {
  id: string
  title: string
  description: string
  price?: string
}

interface ServiceCategoryProps {
  title: string
  description: string
  services: Service[]
  paymentInfo: string
  onRequestService: (serviceId: string) => void
}

export function ServiceCategory({ 
  title, 
  description, 
  services, 
  paymentInfo,
  onRequestService 
}: ServiceCategoryProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              onRequestService={() => onRequestService(service.id)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground font-medium">
            {paymentInfo}
          </p>
        </div>
      </div>
    </section>
  )
} 