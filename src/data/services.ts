import { Anchor, Car, Truck, Wrench, SprayCan, Layers, Cog, Sofa, Music, RotateCw } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  categoryId: string
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  services: Service[]
  paymentInfo: string
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'luxury-rentals',
    title: 'Luxury Rentals & Services',
    description: 'Premium vehicle rental and luxury services',
    paymentInfo: 'Checks payable to RTA VALET',
    services: [
      {
        id: 'limousine',
        title: 'Limousine Service',
        description: 'Luxury transportation for special occasions',
        icon: 'Car',
        categoryId: 'luxury-rentals'
      },
      {
        id: 'valet',
        title: 'Valet Parking',
        description: 'Professional valet parking services, including parking lot management and efficient vehicle handling.',
        icon: 'ParkingCircle',
        categoryId: 'luxury-rentals'
      },
      {
        id: 'classic-vehicle-rentals',
        title: 'Classic Vehicle Rentals',
        description: 'Rent classic and vintage vehicles for special occasions or events',
        icon: 'Car',
        categoryId: 'luxury-rentals'
      },
      {
        id: 'chauffeur-services',
        title: 'Chauffeur Services / Experienced Exotic Car Drivers',
        description: 'Professional chauffeurs and experienced drivers for luxury and exotic vehicles',
        icon: 'Car',
        categoryId: 'luxury-rentals'
      }
    ]
  },
  {
    id: 'mechanics',
    title: 'Mobile Mechanics & Detailing',
    description: 'Professional automotive maintenance and detailing',
    paymentInfo: 'Checks payable to RTA MOBILE',
    services: [
      {
        id: 'mobile-mechanic',
        title: 'Mobile Mechanic',
        description: 'On-site vehicle repair and maintenance',
        icon: 'Wrench',
        categoryId: 'mechanics'
      },
      {
        id: 'mobile-detailing',
        title: 'Mobile Detailing',
        description: 'Professional vehicle cleaning and detailing',
        icon: 'SprayCan',
        categoryId: 'mechanics'
      },
      {
        id: 'marine-services',
        title: 'Marine Services',
        description: 'Professional boat maintenance and repair services',
        icon: 'Anchor',
        categoryId: 'mechanics'
      }
    ]
  },
  {
    id: 'shipping',
    title: 'Shipping & Moving',
    description: 'Vehicle transportation and rental solutions',
    paymentInfo: 'Checks payable to RTA VALET',
    services: [
      {
        id: 'vehicle-transport',
        title: 'Vehicle Transport',
        description: 'Safe and reliable vehicle shipping',
        icon: 'Truck',
        categoryId: 'shipping'
      },
      {
        id: 'movers',
        title: 'Movers (Load and Unload)',
        description: 'Professional moving services for loading and unloading vehicles',
        icon: 'Truck',
        categoryId: 'shipping'
      }
    ]
  },
  {
    id: 'floors',
    title: 'Floors & Coatings',
    description: 'Professional flooring and surface treatments',
    paymentInfo: 'Checks payable to Real Time Auto Pros',
    services: [
      {
        id: 'epoxy-floors',
        title: 'Epoxy Floors',
        description: 'Durable and attractive epoxy flooring',
        icon: 'Layers',
        categoryId: 'floors'
      },
      {
        id: 'ceramic-coating',
        title: 'Ceramic Coating',
        description: 'Long-lasting vehicle paint protection',
        icon: 'SprayCan',
        categoryId: 'floors'
      },
      {
        id: 'powder-coating',
        title: 'Powder Coating',
        description: 'Durable and attractive powder coating',
        icon: 'SprayCan',
        categoryId: 'floors'
      }
    ]
  },
  {
    id: 'custom-garage',
    title: 'Custom Garage Services',
    description: 'Specialized automotive customization and restoration',
    paymentInfo: 'Checks payable to Real Time Auto Pros',
    services: [
      {
        id: 'custom-shop',
        title: 'Custom Auto Shop',
        description: 'Professional vehicle customization',
        icon: 'Building2',
        categoryId: 'custom-garage'
      },
      {
        id: 'motors-transmissions',
        title: 'Motors & Transmissions',
        description: 'Engine and transmission services',
        icon: 'Cog',
        categoryId: 'custom-garage'
      },
      {
        id: 'interiors',
        title: 'Interiors',
        description: 'Custom interior work and restoration',
        icon: 'Sofa',
        categoryId: 'custom-garage'
      },
      {
        id: 'music-audio',
        title: 'Music & Audio',
        description: 'Professional audio system installation',
        icon: 'Music',
        categoryId: 'custom-garage'
      },
      {
        id: 'rotisserie',
        title: 'Rotisserie Restorations',
        description: 'Complete vehicle restoration services',
        icon: 'RotateCw',
        categoryId: 'custom-garage'
      }
    ]
  }
] 