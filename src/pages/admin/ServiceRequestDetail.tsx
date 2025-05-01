import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'
import { ArrowLeft, MapPin, Clock, User, Phone } from 'lucide-react'

type ServiceStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled'

interface Note {
  id: number
  content: string
  timestamp: string
  author: string
}

interface ServiceRequest {
  id: string
  customerName: string
  customerPhone: string
  serviceType: string
  status: ServiceStatus
  location: string
  requestedAt: string
  assignedMechanic: string | null
  description: string
  notes: Note[]
}

const serviceRequest: ServiceRequest = {
  id: 'SR001',
  customerName: 'John Doe',
  customerPhone: '+1 (555) 123-4567',
  serviceType: 'Emergency Service',
  status: 'pending',
  location: '123 Main St, San Francisco, CA',
  requestedAt: '2024-03-20T10:30:00',
  assignedMechanic: null,
  description: 'Car won\'t start, battery might be dead. Need immediate assistance.',
  notes: [
    {
      id: 1,
      content: 'Customer reported battery issues',
      timestamp: '2024-03-20T10:30:00',
      author: 'System'
    }
  ]
}

const statusColors: Record<ServiceStatus, string> = {
  pending: 'bg-yellow-500',
  in_progress: 'bg-blue-500',
  completed: 'bg-green-500',
  cancelled: 'bg-red-500'
}

export default function ServiceRequestDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [status, setStatus] = React.useState(serviceRequest.status)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => navigate('/admin/service-requests')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Requests
          </Button>
          <h2 className="text-2xl font-bold tracking-tight">
            Service Request {serviceRequest.id}
          </h2>
          <p className="text-muted-foreground">
            View and manage service request details
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Update status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Button>Assign Mechanic</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Customer Information */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span>{serviceRequest.customerName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{serviceRequest.customerPhone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{serviceRequest.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>
                Requested at {new Date(serviceRequest.requestedAt).toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Service Details */}
        <Card>
          <CardHeader>
            <CardTitle>Service Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Service Type</h3>
              <p className="text-sm text-muted-foreground">
                {serviceRequest.serviceType}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Description</h3>
              <p className="text-sm text-muted-foreground">
                {serviceRequest.description}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Status</h3>
              <Badge 
                variant="secondary"
                className={`${statusColors[status]} text-white`}
              >
                {status.replace('_', ' ').charAt(0).toUpperCase() + 
                 status.slice(1).replace('_', ' ')}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Notes */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {serviceRequest.notes.map((note) => (
                <div
                  key={note.id}
                  className="flex items-start space-x-4 rounded-lg border p-4"
                >
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">{note.content}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{note.author}</span>
                      <span>•</span>
                      <span>
                        {new Date(note.timestamp).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Add Note
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 