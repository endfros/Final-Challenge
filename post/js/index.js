import { savePost, updatePost, getPost } from "../../utils/firebase.js";

const add = document.querySelector("#btnAdd");
const params = new URLSearchParams(window.location.search);
const title = document.querySelector("#title");
const tags = document.querySelector("#tags");
const content = document.querySelector("#content");

const imgContainer = document.querySelector('#display-image');

imgContainer.style.display = 'none';

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
  setTimeout(redirect, 1800);
});

const image_input = document.querySelector("#image-input");
const imageBtn = document.querySelector(".add-img");
const changeBtn = document.querySelector(".change-img");
const removeBtn = document.querySelector('.remove-img');
removeBtn.style.display = 'none';
changeBtn.style.display = 'none';

image_input.addEventListener("change", function() {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
    console.log(typeof reader.result)
    imgContainer.style.display = 'inline-block';
    imageBtn.style.display = 'none';
    changeBtn.style.display = 'inline-block';
    removeBtn.style.display = 'inline-block';
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });

  reader.readAsDataURL(this.files[0]);
});


removeBtn.addEventListener('click',() => {
  imgContainer.style.display = 'none';
  imageBtn.style.display = 'inline-block';
  changeBtn.style.display = 'none';
  removeBtn.style.display = 'none';
})