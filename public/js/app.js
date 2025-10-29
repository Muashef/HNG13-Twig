// Global app initialization
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = getCurrentUser();
  const currentPage = window.location.pathname.split("/").pop() || "landing";

  if (currentPage === "dashboard" && !currentUser) {
    window.location.href = "/twig/public/login";
  }
});
