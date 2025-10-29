function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePassword(password) {
  return password && password.length >= 6
}

function validateTicketTitle(title) {
  return title && title.length >= 3
}
