const deleteBlogPostHandler = async () => {
  //get the record id, from the url of the post
  var urlString = window.location.href;
  const urlParameter = urlString.split("/");

  //delete operation
  const response = await fetch("/api/blogpost/" + urlParameter[4], {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
    window.alert("Your blogpost was deleted!");
  } else {
    window.alert(
      "Sorry this operation cannot be carried out. Please try again!"
    );
  }
};
document
  .querySelector("#deleteIcon")
  .addEventListener("click", deleteBlogPostHandler);
