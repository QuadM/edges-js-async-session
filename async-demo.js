let users_db = [
  { uid: 0, username: "Mahmoud_0" },
  { uid: 1, username: "Mahmoud_1" },
  { uid: 2, username: "Mahmoud_2" },
  { uid: 3, username: "Mahmoud_3" },
  { uid: 4, username: "Mahmoud_4" },
  { uid: 5, username: "Mahmoud_5" },
];
let posts_db = [
  { author_id: 0, content: "Post 0 content - some lorem text" },
  { author_id: 0, content: "Another Post  0 content - some lorem text" },
  { author_id: 1, content: "Post 1 content - some lorem text" },
  { author_id: 1, content: "Another Post  1 content - some lorem text" },
  { author_id: 2, content: "Post 2 content - some lorem text" },
  { author_id: 2, content: "Another Post  2 content - some lorem text" },
  { author_id: 3, content: "Post 3 content - some lorem text" },
  { author_id: 3, content: "Another Post  3 content - some lorem text" },
  { author_id: 4, content: "Post 4 content - some lorem text" },
  { author_id: 4, content: "Another Post  4 content - some lorem text" },
  { author_id: 5, content: "Post 5 content - some lorem text" },
  { author_id: 5, content: "Another Post  5 content - some lorem text" },
];

//-------------------------------------------------------
function get_user(user_id) {
  console.log("inside get_user");
  let user = {};
  setTimeout(() => {
    console.log("\n=====================\ninside get_user timeout");
    user = users_db.filter((user) => user.uid == user_id)[0];
  }, 2000);
  return user;
}
//-------------------------------------------------------

//-------------------------------------------------------
function get_user_c(user_id, callback) {
  console.log("inside get_user_c");
  setTimeout(() => {
    console.log("\n=====================\ninside get_user_c timeout");
    callback(users_db.filter((user) => user.uid == user_id)[0]);
  }, 2000);
}
function get_user_posts_c(user_id, callback) {
  console.log("\n=====================\ninside get_user_posts_c");
  setTimeout(() => {
    console.log("=====================\ninside get_user_posts_c timeout");
    callback(posts_db.filter((post) => post.author_id == user_id));
  }, 2000);
}
//-------------------------------------------------------

console.log("before async Call");

console.log(get_user(1));

get_user_c(1, (user_from_db) => {
  console.log("callback log =>", user_from_db);
  get_user_posts_c(user_from_db["uid"], (posts) => console.log(posts));
});

console.log("after async Call");
