const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];
getPosts();
function getPosts() {
  let output = "";
  setTimeout(() => {
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1500);
}

createPost = (newPost, callback) => {
  setTimeout(() => {
    posts.push(newPost);
    callback();
  }, 1500);
};



createPost({ title: "post three", body: "this is post three" }, getPosts);
