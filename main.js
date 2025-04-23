const postsSection = document.querySelector(".posts-section");
const newPostsForm = document.querySelector("#add-post-form");
const newPostMessage = document.querySelector(".form-message");
const newPostTitleInput = document.getElementById("post-title");
const newPostContentInput = document.getElementById("post-content");

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

    if (response.status !== 200) {
        throw new Error("something wrong");
    }

    const data = await response.json();
    return data;
}

function getPostComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`).then((response) => {
        if (response.status !== 200) {
            throw new Error("something wrong");
        }
        return response.json();
    });
}

function addPost(title, content) {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            body: content,
            userId: 1,
        }),
    }).then((response) => {
        if (response.status !== 201) {
            throw new Error("something wrong");
        }
        return response.json();
    });
}

async function renderPosts() {
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
function createPostElement(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.dataset.id = post.id;
    postElement.innerHTML = `
        <p class="post__title">${post.title}</p>
        <p class="post__excerpt">${post.body}</p>   
        <div class="comments-block">
            <button class="show-comment-btn">Show Comments</button>
            <div class="comments"></div>
        </div>
    `;
    return postElement;
}
function createCommentElement(comment) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
        <p class="comment__author">${comment.name}</p>
        <p class="comment__email">${comment.email}</p>
        <p class="comment__body">${comment.body}</p>
    `;
    return commentElement;
}

newPostsForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = newPostTitleInput.value.trim();
    const content = newPostContentInput.value.trim();
    newPostMessage.textContent = "";
    if (title && content) {
        document.querySelector(".add-post-btn").disabled = true;
        addPost(title, content)
            .then((newPost) => {
                postsSection.appendChild(createPostElement(newPost));
                newPostMessage.textContent = "Post added successfully";
                newPostTitleInput.value = "";
                newPostContentInput.value = "";
            })
            .catch((error) => {
                newPostMessage.textContent = "Failed to add post";
                console.log("addPost error:", error);
            })
            .finally(() => {
                document.querySelector(".add-post-btn").disabled = false;
            });
    }
});

postsSection.addEventListener("click", async (e) => {
    if (e.target.classList.contains("show-comment-btn")) {
        const postId = e.target.closest(".post").dataset.id;
        e.target.disabled = true;
        e.target.textContent = "Loading...";
        getPostComments(postId)
            .then((comments) => {
                console.log(comments);
                const commentsBlock = e.target.closest(".post").querySelector(".comments");
                commentsBlock.innerHTML = "";
                if (comments.length > 0) {
                    comments.forEach((comment) => {
                        commentsBlock.appendChild(createCommentElement(comment));
                    });
                } else {
                    commentsBlock.innerHTML = `<p>No comments</p>`;
                }
            })
            .catch((error) => {
                console.log("getPostComments error:", error);
            })
            .finally(() => {
                e.target.disabled = false;
                e.target.textContent = "Show Comments";
            });
    }
});

renderPosts();
