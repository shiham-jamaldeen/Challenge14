const logoutHandler = async () => {
  const response = await fetch("/api/users/logout", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
    window.alert("You have logged out from the Technology Blog!");
  }
};
document.querySelector("#logout").addEventListener("click", logoutHandler);
