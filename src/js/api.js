import { API_URL } from "./config.js";

export async function getPosts() {
    const response = await fetch(`${API_URL}?_limit=10`);

    if (response.status !== 200) {
        throw new Error("something wrong");
    }

    return await response.json();
}

export async function addPost(title, content) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            body: content,
            userId: 1,
        }),
    });
    if (response.status !== 201) {
        throw new Error("something wrong");
    }
    return await response.json();
}

export async function getPostComments(postId) {
    const response = await fetch(`${API_URL}/${postId}/comments?_limit=2`);
    if (response.status !== 200) {
        throw new Error("something wrong");
    }
    return await response.json();
}
