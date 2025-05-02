import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { serviceCategories } from '../data/services'
import carIcon from '../assets/car-icon.svg'

export function Header() {
  const location = useLocation()
  const [open, setOpen] = React.useState(false)

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setOpen(false)
    
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
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img src={carIcon} alt="Car" className="w-6 h-6" />
            <span className="font-bold text-xl">RTA</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <DropdownMenu open={open} onOpenChange={setOpen}>
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
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button size="sm" asChild>
              <Link to="/request-service">Request Service</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
} 