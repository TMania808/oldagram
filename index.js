const newSection = document.createElement("section");

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    liked: false,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    liked: false,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
    liked: false,
  },
];

function renderPosts() {
  posts.forEach((post) => {
    newSection.innerHTML += `
      <div class="post-header">
        <img
          class="avatar"
          src="${post.avatar}"
          alt="headshot of ${post.name}"
        />
        <div class="post-user-info">
          <p><span class="bold-text">${post.name}</span></p>
          <p>${post.location}</p>
        </div>
      </div>
      <div>
        <img class="post" src="${
          post.post
        }" ondblclick="likeUnlike(${posts.indexOf(post)})" />
      </div>
      <div>
        <div>
          <img class="icon" id="heart-icon-${
            posts.indexOf(post) + 1
          }" src="images/icon-heart.png" onclick="likeUnlike(${posts.indexOf(
      post
    )})" />
          <img class="icon" src="images/icon-comment.png" />
          <img class="icon" src="images/icon-dm.png" />
        </div>
        <div class="footer-text">
          <p><span class="bold-text" id="post-${
            posts.indexOf(post) + 1
          }-likes">${post.likes} likes</span></p>
          <p><span class="bold-text">${post.username}</span> ${post.comment}</p>
        </div>
      </div>
    </section>
    `;
    document.body.appendChild(newSection);
  });
}

renderPosts();

function likeUnlike(numPost) {
  !posts[numPost].liked ? posts[numPost].likes++ : posts[numPost].likes--;
  !posts[numPost].liked
    ? document
        .querySelector(`#heart-icon-${numPost + 1}`)
        .setAttribute("src", "images/liked-icon-heart.png")
    : document
        .querySelector(`#heart-icon-${numPost + 1}`)
        .setAttribute("src", "images/icon-heart.png");

  document.querySelector(
    `#post-${numPost + 1}-likes`
  ).innerHTML = `${posts[numPost].likes} likes`;
  posts[numPost].liked = !posts[numPost].liked;
}
