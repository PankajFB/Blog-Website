import React from 'react'

function blogCard(props) {



  return (
    <div><div className="container">
    <div className="card">
      <div className="title">
        <h1>{props.title}</h1>
        <p>
         
         {props.blog}
        </p>
      </div>
      <div class="content"></div>
    </div>
  </div></div>
  )
}

export default blogCard