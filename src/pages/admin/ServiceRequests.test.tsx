import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ServiceRequests from './ServiceRequests'

describe('ServiceRequests', () => {
  it('renders the service requests page', () => {
    render(<ServiceRequests />)
    
    // Check for page title
    expect(screen.getByText('Service Requests')).toBeInTheDocument()
    
    // Check for search input
    expect(screen.getByPlaceholderText('Search requests...')).toBeInTheDocument()
    
    // Check for status filter
    expect(screen.getByText('Filter by status')).toBeInTheDocument()
    
    // Check for table headers
    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Customer')).toBeInTheDocument()
    expect(screen.getByText('Service Type')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
  })

  it('filters service requests by search query', async () => {
    render(<ServiceRequests />)
    
    const searchInput = screen.getByPlaceholderText('Search requests...')
    await userEvent.type(searchInput, 'John Doe')
    
    // Should show only John Doe's request
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument()
  })

  it('filters service requests by status', async () => {
    render(<ServiceRequests />)
    
    // Open status filter
    const statusFilter = screen.getByText('Filter by status')
    await userEvent.click(statusFilter)
    
    // Select 'pending' status
    const pendingOption = screen.getByText('Pending')
    await userEvent.click(pendingOption)
    
    // Should show only pending requests
    expect(screen.getByText('John Doe')).toBeInTheDocument() // Pending request
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument() // In progress request
  })

  it('displays correct status badges with appropriate colors', () => {
    render(<ServiceRequests />)
    
    const pendingBadge = screen.getByText('Pending')
    expect(pendingBadge).toHaveClass('bg-yellow-500')
    
    const inProgressBadge = screen.getByText('In Progress')
    expect(inProgressBadge).toHaveClass('bg-blue-500')
    
    const completedBadge = screen.getByText('Completed')
    expect(completedBadge).toHaveClass('bg-green-500')
  })

  it('formats dates correctly', () => {
    render(<ServiceRequests />)
    
    const dateCell = screen.getByText(/2024-03-20/)
    expect(dateCell).toBeInTheDocument()
  })
}) 