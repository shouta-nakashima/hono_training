import { html } from 'hono/html'


type Props = {
  title: string
  children?: any
  style?: any
}

export const Layout = (props: Props) => {
  const { title, style, children } = props
  return html`<!DOCTYPE html>
    <html lang="ja">
      <head>
        ${style}
        <title>${title}</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/modern-css-reset/dist/reset.min.css"
        />
      </head>
      <body>
        ${children}
      </body>
    </html>`
}