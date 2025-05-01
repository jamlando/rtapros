import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'

interface ServiceCardProps {
  title: string
  description: string
  price?: string
  onRequestService?: () => void
}

export function ServiceCard({ title, description, price, onRequestService }: ServiceCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {price && (
          <p className="text-lg font-semibold text-primary">
            {price}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onRequestService}
          className="w-full"
        >
          Request Service
        </Button>
      </CardFooter>
    </Card>
  )
} 