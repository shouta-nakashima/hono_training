import {Layout} from './Layout'
import {link, header, base, footer } from "./style";
import {Style} from 'hono/css'

export const Blogs = () => {
  return (
    <Layout title="blogs page" style={<Style/>}>
      <main className={base}>
        <header className={header}>
          <h2>top page</h2>
          <a className={link} href='http://localhost:3000/pages'>トップページ</a>
        </header>
        <div style={{flexGrow: 1}}>
          <p>Welcome to Blogs page!</p>
        </div>
        <footer className={footer}>
          <p>© 2024 Hono Example</p>
        </footer>
      </main>
    </Layout>
  )
}