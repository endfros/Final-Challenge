import { savePost, onGetTasks, deleteTask, getTasks, getPost,updatePost } from "./firebase.js";

const toPost = document.querySelectorAll('.toPost');
export const postId = '';

const getId = toPost.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
        const doc = await getPost(e.target.id);
        console.log(doc.id)
    })
})