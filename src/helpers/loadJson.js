const axios = require("axios");
// const http = require("http");

// const URL = "http://localhost:8080/posts";

const http = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
});

// const loadJson = async () => {
//   try {
//     const data = await http.get("/posts");
//     console.log("passei");
//     // const json = await JSON.parse(data);
//     console.log(data.data);
//     // return json;
//   } catch (err) {
//     console.log(err);
//   }
// };

// loadJson();

// http.get(URL, (res) => {
//   if (res.statusCode !== 200) {
//     console.log("Request failed: " + res.statusCode);
//   } else {
//   }
// });

// axios
//   .get("http://localhost:8080/posts")
//   .then((resp) => {
//     data = resp.data;
//     data.forEach((e) => {
//       console.log(`${e.id}, ${e.title}, ${e.author}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const loadJson = async () => {
  try {
    // const res = await axios.get("http://localhost:8080/posts");
    const res = await http.get("/posts");
    console.log(res.data);
    // res.data.forEach((e) => {
    //   console.log(`${e.id}, ${e.title}, ${e.author}`);
    // });
  } catch (error) {
    console.log(error);
  }
};

loadJson();
