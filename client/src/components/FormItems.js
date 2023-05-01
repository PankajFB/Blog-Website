import React, { useState } from "react";
import "./FormItems.css";

const FormItems = (props) => {
  const [title, setItem_title] = useState("");
  const [blog, setItem_blog] = useState("");

  const onChangeName = (event) => {
    setItem_title(event.target.value);

    console.log(event.target.value);
  };

  const onChangePrice = (event) => {
    setItem_blog(event.target.value);
    console.log(event.target.value);
  };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   const new_Items = {
  //     title: title,
  //     amount: blog,
  //     id: Math.random().toString()
  //   };


  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const new_Items = {
  //     title: title,
  //     blog: blog,
  //     id: Math.random().toString()
  //   };

  //   const res = await fetch("/newBlog",{
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       new_Items
  //     })
  //   })
    
  // }
  

  // codegrapper
   const onSubmit= ()=>{
    let databody = {
        "title": title,
        "blog": blog
    }

    return fetch('newBlog', {
        method: 'post',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
}


// props.GetFormData(new_Items)

//     console.log(new_Items);

//     setItem_title('')
//     setItem_blog('')
  

  return (
    <>
      <form   className="validate">
        <div className="form-field">
          <label htmlFor="full-name">Title</label>
          <input type="text" value={title} onChange={onChangeName} />
        </div>
        <div className="form-field">
          <label htmlFor="email-input">Article</label>
          <input type="textarea" value={blog} onChange={onChangePrice} />
        </div>

        <div className="form-field">
          <label htmlFor="" />
          <input type="submit" onClick={onSubmit} />
        </div>
      </form>
    </>
  )
}

export default FormItems;
