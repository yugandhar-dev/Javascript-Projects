const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

function getPosts() {
  let output = "";
  setTimeout(() => {
    posts.forEach((m) => {
      output += `<li>${m.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1500);
}

createPost = (newPost, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPost);
      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 1500);
  });
};

// Using Promise
createPost({ title: "post three", body: "this is post three" })
  .then(getPosts)
  .catch((err) => console.error(err));

// Async and await
async function init() {
  await createPost({ title: "post four", body: "this is post four" });

  getPosts();
}
init();

// Async / await with fetch

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};
fetchUsers();

// Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "GoodBye");
});
const promise4 = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((res) => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
