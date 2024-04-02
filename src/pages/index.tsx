import { Hono } from 'hono'
import {Top} from "./top"
import {Blogs} from "./blogs"

const app = new Hono()

app.get('/', (c) => {
  return c.render(
    <Top/>)
})

app.get('/blogs', (c) => {
  return c.render(
    <Blogs/>)
})

export default app