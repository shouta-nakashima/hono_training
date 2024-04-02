import {css} from 'hono/css'

export const base = css`
  width: 100%;
  height: 100%;
  min-height:100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const header = css`
    margin: 0;
    padding: 0 20px;
    color: #333;
    background-color: #f5f5f5;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

export const link = css`
    width: 100px;
    height: 30px;
    color: blue;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: blueviolet;
    }
  `

export const footer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #f5f5f5;
  `