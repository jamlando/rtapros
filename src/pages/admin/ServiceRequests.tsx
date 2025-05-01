import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Badge } from '../../components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table'
import { Search, Filter, ChevronDown } from 'lucide-react'

type ServiceStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled'

interface ServiceRequest {
  id: string
  customerName: string
  serviceType: string
  status: ServiceStatus
  location: string
  requestedAt: string
  assignedMechanic: string | null
}

const serviceRequests: ServiceRequest[] = [
  {
    id: 'SR001',
    customerName: 'John Doe',
    serviceType: 'Emergency Service',
    status: 'pending',
    location: '123 Main St, San Francisco, CA',
    requestedAt: '2024-03-20T10:30:00',
    assignedMechanic: null
  },
  {
    id: 'SR002',
    customerName: 'Jane Smith',
    serviceType: 'Battery Replacement',
    status: 'in_progress',
    location: '456 Market St, San Francisco, CA',
    requestedAt: '2024-03-20T09:15:00',
    assignedMechanic: 'Sarah Johnson'
  },
  {
    id: 'SR003',
    customerName: 'Mike Brown',
    serviceType: 'Tire Change',
    status: 'completed',
    location: '789 Mission St, San Francisco, CA',
    requestedAt: '2024-03-20T08:45:00',
    assignedMechanic: 'David Wilson'
  }
]

const statusColors: Record<ServiceStatus, string> = {
  pending: 'bg-yellow-500',
  in_progress: 'bg-blue-500',
  completed: 'bg-green-500',
  cancelled: 'bg-red-500'
}

export default function ServiceRequests() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [statusFilter, setStatusFilter] = React.useState('all')

  const filteredRequests = serviceRequests.filter(request => {
    const matchesSearch = 
      request.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.serviceType.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Service Requests</h2>
        <p className="text-muted-foreground">
          Manage and track all service requests
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search requests..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Service Requests Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Service Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Requested At</TableHead>
                <TableHead>Mechanic</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.id}</TableCell>
                  <TableCell>{request.customerName}</TableCell>
                  <TableCell>{request.serviceType}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary"
                      className={`${statusColors[request.status]} text-white`}
                    >
                      {request.status.replace('_', ' ').charAt(0).toUpperCase() + 
                       request.status.slice(1).replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>{request.location}</TableCell>
                  <TableCell>
                    {new Date(request.requestedAt).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {request.assignedMechanic || 'Not assigned'}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 