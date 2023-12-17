import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// without jsx
// const el = React.createElement('h1', { id: 'title' }, 'Hello Title')

// with jsx
const a = 10
const el = <h1 id="title">Hello Title, {a}</h1>
root.render(<React.StrictMode>{el}</React.StrictMode>)
