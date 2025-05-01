import React from 'react'
import { MechanicCard } from './MechanicCard'
import { sampleMechanics } from '../data/mechanics'

export function MechanicTracking() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Mechanic Tracking</h2>
        <p className="text-muted-foreground">
          Real-time tracking of our mobile mechanics and their current status.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sampleMechanics.map((mechanic) => (
          <MechanicCard key={mechanic.id} mechanic={mechanic} />
        ))}
      </div>

      <div className="rounded-lg border bg-card p-4">
        <h3 className="text-lg font-semibold mb-2">Legend</h3>
        <div className="grid gap-2 sm:grid-cols-3">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="text-sm">Busy</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-gray-500" />
            <span className="text-sm">Offline</span>
          </div>
        </div>
      </div>
    </div>
  )
} 