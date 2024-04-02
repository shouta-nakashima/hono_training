import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import Pages from "./pages";
import Api from "./api"

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello, World!')
})
app.route('/pages', Pages)
app.route('/api', Api)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})