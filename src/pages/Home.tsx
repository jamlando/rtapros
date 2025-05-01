import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { serviceCategories } from '../data/services'
import { 
  Car, 
  Wrench, 
  Truck, 
  Building2,
  ParkingCircle,
  SprayCan,
  Layers,
  Cog,
  Sofa,
  Music,
  RotateCw
} from 'lucide-react'

const iconMap: { [key: string]: React.ElementType } = {
  Car,
  Wrench,
  Truck,
  Building2,
  ParkingCircle,
  SprayCan,
  Layers,
  Cog,
  Sofa,
  Music,
  RotateCw
}

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Real Time Auto Pros
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Your one-stop solution for all automotive and luxury services
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link to="/request-service">Request Service</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/mechanics">Track Mechanic</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our comprehensive range of automotive and luxury services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <div 
                key={category.id} 
                id={category.id} 
                className="group relative flex h-full flex-col rounded-lg border p-6 shadow-md transition-all hover:shadow-lg scroll-mt-24"
              >
                <div className="flex flex-col space-y-2">
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
                  <div className="mt-4 grid flex-1 gap-4">
                    {category.services.map((service) => {
                      const Icon = iconMap[service.icon]
                      return (
                        <div key={service.id} className="flex items-start space-x-4">
                          {Icon && <Icon className="mt-1 h-5 w-5 flex-shrink-0" />}
                          <div>
                            <h4 className="font-semibold">{service.title}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 scroll-mt-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Us
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are committed to providing exceptional service and quality workmanship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 lg:py-32 scroll-mt-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get in touch with us for any questions or service requests
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 