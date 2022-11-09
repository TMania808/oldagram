const newSection = document.createElement("section")

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    liked: false
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    liked: false
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
    liked: false
  },
];

function renderPosts() {
  posts.forEach(post => {
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
        <img class="post" src="${post.post}" ondblclick="likeUnlike(${posts.indexOf(post)})" />
      </div>
      <div>
        <div>
          <img class="icon" id="heart-icon-${posts.indexOf(post) + 1}" src="images/icon-heart.png" onclick="likeUnlike(${posts.indexOf(post)})" />
          <img class="icon" src="images/icon-comment.png" />
          <img class="icon" src="images/icon-dm.png" />
        </div>
        <div class="footer-text">
          <p><span class="bold-text" id="post-${posts.indexOf(post) + 1}-likes">${post.likes} likes</span></p>
          <p><span class="bold-text">${post.username}</span> ${post.comment}</p>
        </div>
      </div>
    </section>
    `
    document.body.appendChild(newSection)
  })
}

renderPosts()

const postOneLikes = document.getElementById("post-1-likes")
const postTwoLikes = document.getElementById("post-2-likes")
const postThreeLikes = document.getElementById("post-3-likes")

const postOneHeartIcon = document.getElementById("heart-icon-1")
const postTwoHeartIcon = document.getElementById("heart-icon-2")
const postThreeHeartIcon = document.getElementById("heart-icon-3")

function likeUnlike(numPost) {
  if (numPost === 0 && !posts[0].liked) {
    posts[0].likes += 1
    postOneLikes.innerHTML = `${posts[0].likes} likes`
    posts[0].liked = true
    postOneHeartIcon.setAttribute("src", "images/liked-icon-heart.png")
  } else if (numPost === 0 && posts[0].liked) {
    posts[0].likes -= 1
    postOneLikes.innerHTML = `${posts[0].likes} likes`
    posts[0].liked = false
    postOneHeartIcon.setAttribute("src", "images/icon-heart.png")
  }

  if (numPost === 1 && !posts[1].liked) {
    posts[1].likes += 1
    postTwoLikes.innerHTML = `${posts[1].likes} likes`
    posts[1].liked = true
    postTwoHeartIcon.setAttribute("src", "images/liked-icon-heart.png")
  } else if (numPost === 1 && posts[1].liked) {
    posts[1].likes -= 1
    postTwoLikes.innerHTML = `${posts[1].likes} likes`
    posts[1].liked = false
    postTwoHeartIcon.setAttribute("src", "images/icon-heart.png")
  }

  if (numPost === 2 && !posts[2].liked) {
    posts[2].likes += 1
    postThreeLikes.innerHTML = `${posts[2].likes} likes`
    posts[2].liked = true
    postThreeHeartIcon.setAttribute("src", "images/liked-icon-heart.png")
  } else if (numPost === 2 && posts[2].liked) {
    posts[2].likes -= 1
    postThreeLikes.innerHTML = `${posts[2].likes} likes`
    posts[2].liked = false
    postThreeHeartIcon.setAttribute("src", "images/icon-heart.png")
  }
  
  
}