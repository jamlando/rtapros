import React from 'react'

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 RTA Services. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <a className="text-sm font-medium underline-offset-4 hover:underline" href="#">
            Terms
          </a>
          <a className="text-sm font-medium underline-offset-4 hover:underline" href="#">
            Privacy
          </a>
          <a className="text-sm font-medium underline-offset-4 hover:underline" href="#">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
} 