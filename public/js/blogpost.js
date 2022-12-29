const blogPostHandler = async (event) => {
  event.preventDefault();
  const blogPostTitle = document.querySelector("#blogPostTitle").value.trim();
  const blogPostText = document.querySelector("#blogPostText").value.trim();

  const response = await fetch("/api/blogpost", {
    method: "POST",
    body: JSON.stringify({ blogPostTitle, blogPostText }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
    window.alert("Thank you for your contribution!");
  } else {
    window.alert("Sorry operation failed. Please try again!");
  }
};
document
  .querySelector("#newPostButton")
  .addEventListener("click", blogPostHandler);
