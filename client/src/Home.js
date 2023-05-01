import React,{ useState} from 'react';
import BlogCard from './blogCard';


function Home() {

    const [database,setData] = useState([])


    fetch('http://localhost:3000/view')
    .then(response => response.json())
    .then(data => setData(data.data) )



  return (
    <div>
          {database.map((items) => (
        <BlogCard title={items.title} blog={items.blog} key={items.id}></BlogCard>
      ))}
    </div>
  )
}

export default Home