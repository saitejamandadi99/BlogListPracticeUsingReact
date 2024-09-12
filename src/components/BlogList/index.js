// Write your JS code here

import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogs} = props

  return (
    <ul className="listContainer">
      {blogs.map(eachBlog => (
        <BlogItem key={eachBlog.id} blog={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
