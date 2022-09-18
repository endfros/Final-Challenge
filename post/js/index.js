import { savePost, updatePost, getPost } from "../../utils/firebase.js";

const add = document.querySelector("#btnAdd");
const params = new URLSearchParams(window.location.search);
const title = document.querySelector("#title");
const tags = document.querySelector("#tags");
const content = document.querySelector("#content");

if (params.has("id")) {
  console.log(params.has("id"));
  const doc = await getPost(params.get("id"));

  title.value = doc.data().title;
  tags.value = doc.data().tag;
  content.value = doc.data().content;
}

add.addEventListener("click", (event) => {
  if (!title.value.trim() && !tags.value.trim()) {
    window.alert("No puedes ingresar una tarea en blanco!!");
  } else {
    if (!params.has("id")) {
      console.log(title.value, tags.value, content.value);
      savePost(title.value, tags.value, content.value);
    } else {
      console.log(params.get("id"));
      updatePost(params.get("id"), {
        title: title.value,
        tag: tags.value,
        content: content.value,
      });
    }
  }
  let redirect = () => window.location.assign("../index.html");
  setTimeout(redirect, 1000);
});
