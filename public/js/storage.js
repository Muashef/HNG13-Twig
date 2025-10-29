function getUsers() {
  const users = localStorage.getItem("users")
  return users ? JSON.parse(users) : []
}

function getTickets() {
  const tickets = localStorage.getItem("tickets")
  return tickets ? JSON.parse(tickets) : []
}

function getCurrentUser() {
  const user = localStorage.getItem("currentUser")
  return user ? JSON.parse(user) : null
}

function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user))
}

function handleLogout() {
  localStorage.removeItem("currentUser")
  window.location.href = "/twig/public/"
}
