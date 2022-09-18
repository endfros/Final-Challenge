import {
  savePost,
  onGetTasks,
  deleteTask,
  getTasks,
  getPost,
  updatePost,
  saveId,
} from "./firebase.js";

const main = document.querySelector(".main-posts");
const buttonCreate = document.querySelector(".button-create");
const modal = document.querySelector(".modal-content");
let editStatus = false;
let id = "";
export let docId = "";

window.addEventListener("DOMContentLoaded", async () => {
  // const querySnapshot = await getTasks()
  onGetTasks((querySnapshot) => {
    let html = "";

    querySnapshot.forEach((doc) => {
      let title = doc.data().title;
      let tag = doc.data().tag;

      html += `
                <a href="" class="toPost">
                <article class="card mb-3">

                <div class="card-body">
    
                    <!-- CARD PROFILE -->
                    <div class="card__top">
                    <div class="card__div--imgheader">
                        <a href="#"
                        ><img
                            class="card__img"
                            src="./assets/main/images/nick-taylor-header/nick-taylor.webp"
                        /></a>
                    </div>
                    <div class="card__div--text">
                        <a href="#" class="card__text card__text--top"
                        ><p class="card__text--profile">Nick Taylor</p></a
                        >
                        <a href="#" class="card__text card__text--bottom"><p>Jul 29</p></a>
                    </div>
                    </div>
            
                    <!-- CARD TITLE -->
                    <div class="card__mid">
                    <a href="./post.html?id=${doc.id}" class="card__mid--title"
                        ><h2 class="header__title toPost">
                        ${title}
                        </h2></a
                    >
                    </div>
            
                    <!-- CARD HASHTAGS -->
                    <div class="card__trend">
                    <a href="#"><span class="card__tag card__tag--green toPost"
                        ><span class="card__hashtag--green">#</span>${tag}</span
                    ></a>
                    </div>
            
                    <!-- CARD LIKES & COMMENTS -->
                    <div class="card__bottom d-flex">
                    <div class="card__bottom--icons">
                        <a href="#" class="card__item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            role="img"
                            aria-labelledby="a1fi1ekvr6wffs559g4p7wq21e4qfok6"
                            class="crayons-icon"
                        >
                            <title id="a1fi1ekvr6wffs559g4p7wq21e4qfok6">Reactions</title>
                            <path
                            d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"
                            ></path>
                        </svg>
                        <span class="card__bottom--number"></span><span class="card__bottom--text"> reactions</span>
                        </a>
                        <a href="#" class="card__item">
            
            
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            role="img"
                            aria-labelledby="a5h29u0lxhpth5uxoerscv55zo78xjjo"
                            class="crayons-icon"
                        >
                            <title id="a5h29u0lxhpth5uxoerscv55zo78xjjo">Comments</title>
                            <path
                            d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"
                            ></path>
                        </svg>
                        <span class="card__bottom--number"></span><span class="card__bottom--text"> comments</span>
                        </a>
                    </div>
                    <span class="card__bottom--time">1 min read</span>
                    <button class="btn btn-secondary card__bottom--btn" id="btn-Edit${doc.id}">Edit</button>
                    <button class="btn btn-secondary card__bottom--btn" id="btn-Delete${doc.id}">Delete</button>
                    </div>
                </div>
                </article>
            </a>
            `;
    });

    main.innerHTML = html;

    const deleteButton = document.querySelectorAll('[id ^= "btn-Delete"]');
    deleteButton.forEach((btn) => {
      btn.addEventListener("click", () => {
        let realId = btn.id.split("btn-Delete")[1];
        deleteTask(realId);
      });
    });

    const editButton = document.querySelectorAll('[id ^= "btn-Edit"]');

    const toPost = document.querySelectorAll(".toPost");

    toPost.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        saveId(e.path[0].id);
      });
    });

    // const toPost = document.querySelectorAll('.toPost');

    // toPost.forEach((btn) => {
    //     btn.addEventListener('mouseover', (e) => {
    //         console.log(e.path[0].id)
    //     })
    // })

    editButton.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        let realId = btn.id.split("btn-Edit")[1];
        const doc = await getPost(realId);
        // console.log(doc.data());
        modal.style.display = "block";
        const title = document.querySelector("#title");
        const tags = document.querySelector("#description");
        const content = document.querySelector("#content");
        title.value = doc.data().title;
        tags.value = doc.data().tag;
        content.value = doc.data().content;
        editStatus = true;
        id = doc.id;
      });
    });
  });
});

const close = document.querySelector(".modal-content__close");
const add = document.querySelector(".modal-content__add");

buttonCreate.addEventListener("click", (event) => {
  // event.preventDefault(); // Prevents the default event of an element
  modal.style.display = "block";
  editStatus = false;
});

close.addEventListener("click", () => {
  modal.style.display = "none";
  editStatus = false;
});

add.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title");
  const tags = document.querySelector("#description");
  const content = document.querySelector("#content");

  if (!title.value.trim() && !tags.value.trim()) {
    window.alert("No puedes ingresar una tarea en blanco!!");
  } else {
    if (!editStatus) {
      savePost(title.value, tags.value, content.value);
      modal.style.display = "none";
    } else {
      updatePost(id, {
        title: title.value,
        tag: tags.value,
        content: content.value,
      });
      modal.style.display = "none";
      editStatus = false;
    }
  }
});
