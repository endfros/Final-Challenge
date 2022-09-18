import {
  savePost,
  onGetTasks,
  deleteTask,
  getTasks,
  getId,
  getPost,
} from "./firebase.js";

const main = document.querySelector(".main-post");
const params = new URLSearchParams(window.location.search);

window.addEventListener("DOMContentLoaded", async () => {
  // const querySnapshot = await getTasks()

  const doc = await getPost(params.get("id"));

  let title = doc.data().title;
  let tag = doc.data().tag;
  let content = doc.data().content;

  let html = "";

  console.log(title, tag, content);

  html += `
            <main class="container main-post m-0 p-0 overflow-hidden">

            <div class="card p-md-5">
              <!-- */ Nick Tayalor section */  -->
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--JpnZwwRh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5o3z8c08u7uyyxdqyiu1.jpeg"
                class="img-fluid card-img-top" alt="img-july29th" />

              <div class="p-4">
                <section class="section__taylor col-sm-12 col-md-12 col-lg-12">
                  <div class="d-flex align-self-center align-items-center px-3 pt-3">
                    <img
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--EkBIkzdc--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/9597/2629be65-f045-4612-a7e9-28cd9e48bd49.jpg"
                      alt="img__taylor" class="rounded-circle img-taylor" />
                    <div>
                      <h3 class="mb-0 px-3 text__nick">Nick Taylor</h3>
                      <p class="text-muted fw-light mb-0 px-3 text__posted">Posted on 29 Jul</p>
                    </div>
                  </div>
                </section>

                <!-- */ Title section */  -->
                <section class="container-fluid">
                  <div class="section__title d-flex col-sm-12 col-md-12 col-lg-12">
                    <h2 class="fw-bold lh-base py-1 text__title my-2">${title}
                    </h2>
                  </div>
                </section>

                <!-- */ # section */  -->
                <section class="container-fluid p-0">
                  <div class="d-flex flex-wrap ">
                    <a href="https://dev.to/t/discuss" class="text-decoration-none text-muted ms-3"><span
                        class="span__discuss col-sm-">#</span>${tag}</a>
                  </div>
                </section>
              </div>
              <!-- */ Nick Tayalor section */  -->

              <!-- */ p section */  -->
              <section class="col-sm-12 col-md-12 col-lg-12">
                <div class="d-flex align-self-center align-items-center px-3 pt-3 text__aftergift">
                  <p class="fw-normal fs-5">${content}</p>
                </div>
              </section>

              <!-- */ Discussion */  -->
              <section class="col-sm-12 col-md-12 col-lg-12">
                <div class="d-flex justify-content-between">
                  <div class="pt-4 discussion fs-2 ">Discussion (25)</div>
                  <div class="pt-4 flex-shrink-1"><button type="button" class="btn btn-light">Suscribe</button></div>
                </div>
                <div class="d-flex discussion__container my-3">
                  <a class="profile-picture px-2 px-md-3" href="">
                    <img class="profile-picture__img rounded-circle pr-md-5" alt=""
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--1EUS-5q1--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/900277/91d4290b-f937-44ba-affc-014fa8793c22.png" />
                  </a>
                  <div class="d-flex col-10 discussion__tex">
                    <label for="exampleFormControlTextarea1" class="form-label"></label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"
                      placeholder="Add to the discussion"></textarea>
                  </div>
                </div>
              </section>

            </div>

            <div class="card mt-4 p-md-5 py-md-3">
              <!-- read next -->
              <section class="section__readnext col-sm-12 col-md-12 col-lg-12">
                <div class="d-flex align-self-center align-items-center my-4">
                  <div>
                    <h3 class="font__readnext mb-0 lh-tight">Read Next</h3>
                  </div>
                </div>

                <div class="d-flex align-self-center align-items-center my-4">
                  <a class="profile-picture px-2 px-md-3" href="">
                    <img class="profile-picture__img-2 rounded-circle pr-md-5" alt=""
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--H7r_s_N7--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/351271/9148b711-a13e-4438-bde8-94d155a952b4.jpg" />
                  </a>
                  <a href="">
                    <div>
                      <h3 class="font__readnext mb-0 fs-4">The truth behind being a good programmer</h3>
                      <p class="text-muted fs-6 fw-light mb-0">Bek Juice - Jul 21</p>
                    </div>
                  </a>
                </div>
                <div class="d-flex align-self-center align-items-center my-4">
                  <a class="profile-picture px-2 px-md-3" href="">
                    <img class="profile-picture__img-2 rounded-circle pr-md-5" alt=""
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--PBTSNcTW--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/2b719be8-68c7-4456-bd5c-42f21c3bd6a8.png" />
                  </a>
                  <a href="">
                    <div>
                      <h3 class="font__readnext mb-0 fs-4 lh-tight">Music Monday — What are you listening to? (July 18)</h3>
                      <p class="font_readnextp text-muted font_readnextp fw-light mb-0">Michael Tharrington - Jul 18</p>
                    </div>
                  </a>

                </div>
                <div class="d-flex align-self-center align-items-center my-4">
                  <a class="profile-picture px-2 px-md-3" href="">
                    <img class="profile-picture__img-2 rounded-circle pr-md-5" alt=""
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--PYOjynJN--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/784473/1770dea2-974d-4565-983b-8d4975713aa3.png" />
                  </a>
                  <a href="">
                    <div>
                      <h3 class="font__readnext mb-0 fs-4 lh-tight">What is your favourite coding language?</h3>
                      <p class="text-muted font_readnextp fw-light mb-0">InvalidLenni - Jul 20</p>
                    </div>
                  </a>

                </div>
                <div class="d-flex align-self-center align-items-center my-4">
                  <a class="profile-picture px-2 px-md-3" href="">
                    <img class="profile-picture__img-2 rounded-circle pr-md-5" alt=""
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--ghhAZTTg--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/219980/bf8e562f-c91a-446d-afa0-95b2d51718d7.png" />
                  </a>
                  <a href="">
                    <div>
                      <h3 class="font__readnext mb-0 fs-4 lh-tight">Can I share GitHub copilot like Netflix account?</h3>
                      <p class="text-muted font_readnextp fw-light mb-0">Adarsh Madrecha - Jul 20</p>
                    </div>
                  </a>

                </div>
              </section>
            </div>
            `;

  main.innerHTML = html;
});
