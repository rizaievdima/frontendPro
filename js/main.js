import { getPosts, addPost, getPostComments } from "./api.js";
import { createPostElement, createCommentElement } from "./ui.js";

const postsSection = document.querySelector(".posts-section");
const newPostsForm = document.querySelector("#add-post-form");
const newPostMessage = document.querySelector(".form-message");
const newPostTitleInput = document.getElementById("post-title");
const newPostContentInput = document.getElementById("post-content");

async function init() {
    try {
        postsSection.innerHTML = "Loading...";
        const postsData = await getPosts();
        postsSection.innerHTML = "";

        postsData.forEach((post) => {
            postsSection.appendChild(createPostElement(post));
        });
    } catch (error) {
        postsSection.innerHTML = `<p class="weather-widget__error">${error.message}</p>`;
        console.log("getPosts error:", error);
    }
}

newPostsForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = newPostTitleInput.value.trim();
    const content = newPostContentInput.value.trim();
    newPostMessage.textContent = "";
    if (title && content) {
        try {
            document.querySelector(".add-post-btn").disabled = true;
            const newPost = await addPost(title, content);
            postsSection.appendChild(createPostElement(newPost));
            newPostMessage.textContent = "Post added successfully";
            newPostTitleInput.value = "";
            newPostContentInput.value = "";
        } catch (error) {
            newPostMessage.textContent = "Failed to add post";
            console.log("addPost error:", error);
        }
        document.querySelector(".add-post-btn").disabled = false;
    }
});

postsSection.addEventListener("click", async (e) => {
    if (e.target.classList.contains("show-comment-btn")) {
        try {
            const postId = e.target.closest(".post").dataset.id;
            e.target.disabled = true;
            e.target.textContent = "Loading...";
            const comments = await getPostComments(postId);

            const commentsBlock = e.target.closest(".post").querySelector(".comments");
            commentsBlock.innerHTML = "";
            if (comments.length > 0) {
                comments.forEach((comment) => {
                    commentsBlock.appendChild(createCommentElement(comment));
                });
            } else {
                commentsBlock.innerHTML = `<p>No comments</p>`;
            }
        } catch (error) {
            console.log("getPostComments error:", error);
        }

        e.target.disabled = false;
        e.target.textContent = "Show Comments";
    }
});

init();
