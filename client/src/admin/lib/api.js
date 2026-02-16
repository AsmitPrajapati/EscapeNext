export async function createProperty(data) {
  try {
    const response = await fetch('/api/properties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('Failed to create property')
    return await response.json()
  } catch (error) {
    console.error('Error creating property:', error)
    throw error
  }
}

export async function getProperties() {
  try {
    const response = await fetch('/api/properties')
    if (!response.ok) throw new Error('Failed to fetch properties')
    return await response.json()
  } catch (error) {
    console.error('Error fetching properties:', error)
    throw error
  }
}

export async function getBookings() {
  try {
    const response = await fetch('/api/bookings')
    if (!response.ok) throw new Error('Failed to fetch bookings')
    return await response.json()
  } catch (error) {
    console.error('Error fetching bookings:', error)
    throw error
  }
}
