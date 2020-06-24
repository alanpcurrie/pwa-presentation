// example theme.js
import theme from 'mdx-deck/themes'
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'
const futura='Futura, sans-serif'
const mono ='"IBM Plex Mono"'

export default {
  ...theme,
  font: futura,
  h1: {
    textTransform: 'uppercase',
    fontWeight: 600
  },
  monospace: '"Dank Mono", monospace',
  prism: {
    style: atomDark
  },
  img: {
    maxWidth: '100%'
  },
  weights: 400,
  li: {
    paddingBottom: '20px',
    fontFamily: '"Dank Mono", monospace'
  },
  ul: {
    listStyle: 'none',
    paddingLeft: '20px',
    display: 'inline-block'
  },
  P: {
    fontFamily: mono,
    textAlign: 'left'
  },
  colors: {
    text: '#fdfdfd',
    background: '#121417',
    link: '#fff',
    pre: '#fff',
    preBackground: '#051626',
    code: '#fff'
  }
}
