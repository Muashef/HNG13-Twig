// --- Global app initialization ---
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = getCurrentUser();
  const currentPage = window.location.pathname.split("/").pop() || "landing";

  if (currentPage === "dashboard" && !currentUser) {
    window.location.href = "/twig/public/login";
  }

  if ((currentPage === "login" || currentPage === "signup") && currentUser) {
    window.location.href = "/twig/public/dashboard";
  }
});

function handleSignup(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  const users = getUsers();

  if (users.some(u => u.email === email)) {
    alert("Email already registered");
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  setCurrentUser(newUser);

  window.location.href = "/twig/public/dashboard";
}

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid email or password");
    return;
  }

  setCurrentUser(user);

  window.location.href = "/twig/public/dashboard";
}


function handleLogout() {
  localStorage.removeItem("currentUser");
  window.location.href = "/twig/public/";
}