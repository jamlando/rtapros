export interface Location {
  lat: number
  lng: number
  address: string
}

export interface Mechanic {
  id: string
  name: string
  status: 'available' | 'busy' | 'offline'
  currentLocation: Location
  currentService?: {
    id: string
    customerName: string
    serviceType: string
    estimatedArrival: string
  }
}

export const sampleMechanics: Mechanic[] = [
  {
    id: 'm1',
    name: 'John Smith',
    status: 'available',
    currentLocation: {
      lat: 37.7749,
      lng: -122.4194,
      address: '123 Main St, San Francisco, CA'
    }
  },
  {
    id: 'm2',
    name: 'Sarah Johnson',
    status: 'busy',
    currentLocation: {
      lat: 37.7833,
      lng: -122.4167,
      address: '456 Market St, San Francisco, CA'
    },
    currentService: {
      id: 's1',
      customerName: 'Mike Brown',
      serviceType: 'Emergency Service',
      estimatedArrival: '15 minutes'
    }
  },
  {
    id: 'm3',
    name: 'David Wilson',
    status: 'offline',
    currentLocation: {
      lat: 37.7855,
      lng: -122.4067,
      address: '789 Mission St, San Francisco, CA'
    }
  }
] 