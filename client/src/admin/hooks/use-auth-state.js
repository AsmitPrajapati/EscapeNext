import { useState } from 'react'

export function useAuthState() {
  const [currentPage, setCurrentPage] = useState('login')
  const [userEmail, setUserEmail] = useState('')

  return {
    currentPage,
    setCurrentPage,
    userEmail,
    setUserEmail,
  }
}
