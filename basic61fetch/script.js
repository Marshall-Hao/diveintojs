//! fetch is a method of window
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json(); //! convert the json object to json,so js can read
//   })
//   .then((data) => {
//     console.log(data.map((user) => user.name));
//   });

const btn = document.querySelector("button");

const fetchUser = async () => {
  try {
    //! fetch only throw an error if actually error connecting to the server
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (res.ok) {
      //! .ok is a property of fetch json object
      const data = await res.json();
      console.log(data.map((e) => e.name));
    } else {
      console.log("FAILURE");
    }
  } catch (e) {
    console.error(e);
  }
};

btn.addEventListener("click", fetchUser()); //! function name without () means passing the code of the function, and callback always be a function, so no ()

const URL = "https://jsonplaceholder.typicode.com/posts";

const postUser = async () => {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      //! convert the object to a string version of json
      title: "test",
    }),
  });
  const user = await res.json();
  console.log(user);
};

postUser();
