export function createPostElement(post) {
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
export function createCommentElement(comment) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
        <p class="comment__author">${comment.name}</p>
        <p class="comment__email">${comment.email}</p>
        <p class="comment__body">${comment.body}</p>
    `;
    return commentElement;
}
