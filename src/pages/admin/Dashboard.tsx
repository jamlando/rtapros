import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { 
  Activity, 
  Clock, 
  Users, 
  CheckCircle2,
  AlertCircle,
  Wrench,
  TrendingUp
} from 'lucide-react'

// Sample data - replace with real data later
const metrics = [
  {
    name: 'Active Requests',
    value: '12',
    icon: Activity,
    description: 'Currently being processed'
  },
  {
    name: 'Available Mechanics',
    value: '5',
    icon: Users,
    description: 'Ready for service'
  },
  {
    name: 'Average Response Time',
    value: '15m',
    icon: Clock,
    description: 'Time to first response'
  },
  {
    name: 'Completion Rate',
    value: '98%',
    icon: CheckCircle2,
    description: 'Successful service completion'
  }
]

const stats = [
  {
    name: 'Active Service Requests',
    value: '12',
    icon: Wrench,
    change: '+2 from last week',
    changeType: 'positive'
  },
  {
    name: 'Available Mechanics',
    value: '8',
    icon: Users,
    change: '3 on break',
    changeType: 'neutral'
  },
  {
    name: 'Average Response Time',
    value: '15 min',
    icon: Clock,
    change: '-5 min from last week',
    changeType: 'positive'
  },
  {
    name: 'Service Completion Rate',
    value: '94%',
    icon: TrendingUp,
    change: '+2% from last week',
    changeType: 'positive'
  }
]

const recentActivity = [
  {
    id: 1,
    type: 'service_request',
    description: 'New service request from John Doe',
    time: '5 minutes ago'
  },
  {
    id: 2,
    type: 'status_update',
    description: 'Mike Johnson completed service request #123',
    time: '1 hour ago'
  },
  {
    id: 3,
    type: 'mechanic_status',
    description: 'Sarah Wilson went on break',
    time: '2 hours ago'
  }
]

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Overview of your service operations
          </p>
        </div>

        {/* Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.name}
                </CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
            >
              <dt>
                <div className="absolute rounded-md bg-gray-100 p-3">
                  <stat.icon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.changeType === 'positive'
                      ? 'text-green-600'
                      : stat.changeType === 'negative'
                      ? 'text-red-600'
                      : 'text-gray-500'
                  }`}
                >
                  {stat.change}
                </p>
              </dd>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-4 rounded-lg border p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                    {activity.type === 'service_request' ? (
                      <Activity className="h-5 w-5 text-blue-500" />
                    ) : activity.type === 'status_update' ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-yellow-500" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.description}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
} 