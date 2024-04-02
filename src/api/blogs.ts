import {Hono} from "hono"
import {blogs} from "../constants/blogs"
import {getBlog, getBlogs} from "../models/blogs";

const app = new Hono()

app.get('/', (c) => {
  const blogs = getBlogs()
  return c.json(blogs)
})

app.get('/:id', (c) => {
  const id = c.req.param('id')
  const blog = getBlog(id)
  return c.json(blog)
})

app.put('/:id', (c) => {
  const id = c.req.param('id')
  const blog = blogs.find(blog => blog.id === id)

  return c.text(`update blog ${id}`)
})

app.post('/', (c) => {
  return c.text('create blog')
})

app.delete('/:id', (c) => {
  const id = c.req.param('id')
  return c.text(`delete blog ${id}`)
})

export default app