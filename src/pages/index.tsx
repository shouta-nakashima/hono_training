import { Hono } from 'hono'
import {Top} from "./top"
import {Blogs} from "./blogs"
import {getBlogs} from "../models/blogs";

const app = new Hono()

app.get('/', (c) => {
  return c.render(
    <Top/>)
})

app.get('/blogs', (c) => {
  const blogs = getBlogs()
  return c.render(
    <Blogs blogs={blogs}/>)
})

export default app