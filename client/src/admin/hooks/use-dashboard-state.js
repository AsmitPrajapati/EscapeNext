import { useState } from 'react'

export function useDashboardState() {
  const [currentPage, setCurrentPage] = useState('properties')
  const [selectedProperty, setSelectedProperty] = useState(null)

  return {
    currentPage,
    setCurrentPage,
    selectedProperty,
    setSelectedProperty,
  }
}
