import {Layout} from './Layout'
import {link, header, base, footer } from "./style";
import {Style} from 'hono/css'

export const Top = () => {
  return (
    <Layout title="top page" style={<Style/>}>
      <main className={base}>
        <header className={header}>
          <h2>top page</h2>
          <a className={link} href='http://localhost:3000/pages/blogs'>ブログページ</a>
        </header>
        <div style={{flexGrow: 1}}>
          <p>Welcome to Hono Example!</p>
        </div>
        <footer className={footer}>
          <p>© 2024 Hono Example</p>
        </footer>
      </main>
    </Layout>
  )
}