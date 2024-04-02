import {Layout} from './Layout'
import {link, header, base, footer } from "./style";
import {Style} from 'hono/css'
import type {BlogList} from '../types/blogs'

type Props = {
  blogs: BlogList
}

export const Blogs = ({blogs}: Props) => {

  return (
    <Layout title="blogs page" style={<Style/>}>
      <main className={base}>
        <header className={header}>
          <h2>blogs page</h2>
          <a className={link} href='http://localhost:3000/pages'>トップページ</a>
        </header>
        <div style={{flexGrow: 1}}>
          <ul>
            {blogs.map(blog => (
              <li key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <footer className={footer}>
          <p>© 2024 Hono Example</p>
        </footer>
      </main>
    </Layout>
  )
}