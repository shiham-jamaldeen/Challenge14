const editBlogPostHandler = async () => {
  //get id of the Blog Post
  var urlString = window.location.href;
  const urlParameter = urlString.split("/");

  //get values of text input
  const editedBlogTitle = document
    .querySelector("#editBlogPostTitle")
    .value.trim();
  const editedBlogText = document
    .querySelector("#editBlogPostText")
    .value.trim();

  //send arrays in to db via PUT statement
  const response = await fetch("/api/blogpost/" + urlParameter[4], {
    method: "PUT",
    body: JSON.stringify({ editedBlogTitle, editedBlogText }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
    window.alert("Your blogpost was updated!");
  } else {
    window.alert(
      "Sorry this operation cannot be carried out. Please try again!"
    );
  }
};
document
  .querySelector("#editBlogPost")
  .addEventListener("click", editBlogPostHandler);
