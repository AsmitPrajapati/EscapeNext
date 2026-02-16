export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export function validatePhone(phone) {
  const regex = /^[0-9]{10}$/
  return regex.test(phone)
}

export function validatePropertyForm(data) {
  const errors = {}
  
  if (!data.propertyName) errors.propertyName = 'Property name is required'
  if (!data.email) errors.email = 'Email is required'
  if (!validateEmail(data.email)) errors.email = 'Invalid email format'
  if (!data.mobileNumber) errors.mobileNumber = 'Phone number is required'
  if (!validatePhone(data.mobileNumber)) errors.mobileNumber = 'Invalid phone number'
  
  return errors
}

export function validateLocationForm(data) {
  const errors = {}
  
  if (!data.address) errors.address = 'Address is required'
  if (!data.city) errors.city = 'City is required'
  if (!data.state) errors.state = 'State is required'
  if (!data.country) errors.country = 'Country is required'
  
  return errors
}
