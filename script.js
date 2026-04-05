// Home Page
// likes
const likes = document.querySelectorAll(".like");
likes.forEach(function (like) {
  like.addEventListener("click", function () {
    if (like.style.fill === "red") {
      like.style.fill = "none";
    } else {
      like.style.fill = "red";
    }
  });
});

//Side Navbar
const sidenavbar = document.getElementById("sidenavbar");
const menuicon = document.getElementById("menuicon");
const closenavbar = document.getElementById("closenavbar");

menuicon.addEventListener("click", () => {
  sidenavbar.style.right = "0";
});

closenavbar.addEventListener("click", () => {
  sidenavbar.style.right = "-50%";
});

// cancel
function cancel(event) {
  event.target.parentElement.remove();
}
