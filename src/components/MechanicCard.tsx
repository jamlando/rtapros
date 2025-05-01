import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Mechanic } from '../data/mechanics'

interface MechanicCardProps {
  mechanic: Mechanic
}

const statusColors = {
  available: 'bg-green-500',
  busy: 'bg-yellow-500',
  offline: 'bg-gray-500'
}

export function MechanicCard({ mechanic }: MechanicCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{mechanic.name}</CardTitle>
          <Badge 
            variant="secondary"
            className={`${statusColors[mechanic.status]} text-white`}
          >
            {mechanic.status.charAt(0).toUpperCase() + mechanic.status.slice(1)}
          </Badge>
        </div>
        <CardDescription>{mechanic.currentLocation.address}</CardDescription>
      </CardHeader>
      <CardContent>
        {mechanic.currentService ? (
          <div className="space-y-2">
            <p className="text-sm font-medium">Current Service:</p>
            <div className="rounded-lg bg-muted p-3">
              <p className="text-sm">
                <span className="font-medium">Customer:</span> {mechanic.currentService.customerName}
              </p>
              <p className="text-sm">
                <span className="font-medium">Service:</span> {mechanic.currentService.serviceType}
              </p>
              <p className="text-sm">
                <span className="font-medium">ETA:</span> {mechanic.currentService.estimatedArrival}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            {mechanic.status === 'available' 
              ? 'Available for new service requests'
              : 'Currently not available for service'}
          </p>
        )}
      </CardContent>
    </Card>
  )
} 