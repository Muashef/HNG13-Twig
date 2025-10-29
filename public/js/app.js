// Global app initialization
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = window.currentUser // Assuming currentUser is set globally or passed from server
  const currentPage = window.location.pathname.split("/").pop() || "landing"

  if (currentPage === "dashboard" && !currentUser) {
    window.location.href = "/twig/public/login"
  }
})
