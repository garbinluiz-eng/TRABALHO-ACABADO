let likes = 0;
let dislikes = 0;

const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

const likesText = document.getElementById("likes");
const dislikesText = document.getElementById("dislikes");

likeBtn.addEventListener("click", function() {
    likes++;
    likesText.textContent = likes;
});

dislikeBtn.addEventListener("click", function() {
    dislikes++;
    dislikesText.textContent = dislikes;
});