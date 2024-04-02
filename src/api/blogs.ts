import {Hono} from "hono"

const app = new Hono()

app.get('/', (c) => {
  return c.text('return blog list')
})

app.get('/:id', (c) => {
  const id = c.req.param('id')
  return c.text(`return blog detail ${id}`)
})

app.put('/:id', (c) => {
  const id = c.req.param('id')
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