const commentHandler = async (event) => {
  event.preventDefault();

  // You can get url_string from window.location.href if you want to work with
  // the URL of the current page
  var urlString = window.location.href;
  const urlParameter = urlString.split("/");

  //get new comment
  const comment = document.querySelector("#newCommentTextArea").value.trim();
  const post_id = urlParameter[4];

  const response = await fetch("/api/comment", {
    method: "POST",
    body: JSON.stringify({ comment, post_id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
    window.alert("your comment was recorded");
  } else {
    window.alert("Sorry operation failed. Please try again!");
  }
};
document
  .querySelector("#comment-button")
  .addEventListener("click", commentHandler);
