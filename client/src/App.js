import "./App.css";
// import BlogCard from "./blogCard";
import FormItems from "./components/FormItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";

function App() {
  // const [database,setData] = useState([])

  // console.log(database.data)

  // fetch('http://localhost:3000/view')
  // .then(response => response.json())
  // .then(data => setData(data.data) )

  return (
    <div className="App">

    <br />
      <a href="/">
        <button type="button" class="btn btn-primary btn-lg ">
          Home
        </button>
      </a>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {" "}
                <Home />{" "}
              </div>
            }
          />
          <Route
            path="/post"
            element={
              <div>
                {" "}
                <FormItems></FormItems>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* {database.map((items) => (
        <BlogCard title={items.title} blog={items.blog} key={items.id}></BlogCard>
      ))} */}

      {/* <FormItems></FormItems> */}

      {/* <BlogCard></BlogCard> */}
      <a href="/post">
        <button type="button" class="btn btn-primary btn-lg buttonfixed">
          New Post
        </button>
      </a>
    </div>
  );
}

export default App;
