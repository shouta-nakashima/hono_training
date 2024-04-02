import {Hono} from "hono"
import blogs from "./blogs"

const app = new Hono()

app.route('/blogs', blogs)

export default app