import { useState } from 'react'

export function useFormState(initialState = {}) {
  const [formData, setFormData] = useState(initialState)

  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  // const resetForm = () => {
  //   setFormData(initialState)
  // }

  return {
    formData,
    updateField,
    // resetForm,
    setFormData,
  }
}
