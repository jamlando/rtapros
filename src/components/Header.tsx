import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { ChevronDown, Menu, X } from 'lucide-react'
import { serviceCategories } from '../data/services'
import carIcon from '../assets/car-icon.svg'

export function Header() {
  const location = useLocation()
  const [desktopOpen, setDesktopOpen] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false)

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setDesktopOpen(false)
    setMobileMenuOpen(false)
    setMobileServicesOpen(false)
    
    // Add a small delay to ensure the dropdown is closed before scrolling
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const headerOffset = 80 // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img src={carIcon} alt="Car" className="w-6 h-6" />
            <span className="font-bold text-xl">RTA</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <DropdownMenu open={desktopOpen} onOpenChange={setDesktopOpen}>
              <DropdownMenuTrigger className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground/60">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {serviceCategories.map((category) => (
                  <DropdownMenuItem key={category.id} asChild>
                    <a
                      href={`#${category.id}`}
                      onClick={(e) => handleAnchorClick(e, category.id)}
                      className="w-full cursor-pointer"
                    >
                      {category.title}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a 
              href="#about" 
              onClick={(e) => handleAnchorClick(e, 'about')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Desktop Request Service Button */}
        <div className="hidden md:flex items-center">
          <Button size="sm" asChild>
            <Link to="/request-service">Request Service</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container py-4 space-y-4">
            <div className="space-y-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between py-2 text-sm font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-2">
                  {serviceCategories.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      onClick={(e) => handleAnchorClick(e, category.id)}
                      className="block py-2 text-sm font-medium"
                    >
                      {category.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a 
              href="#about" 
              onClick={(e) => handleAnchorClick(e, 'about')}
              className="block py-2 text-sm font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className="block py-2 text-sm font-medium"
            >
              Contact
            </a>
            <Button size="sm" className="w-full" asChild>
              <Link to="/request-service">Request Service</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
} 