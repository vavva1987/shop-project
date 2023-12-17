import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// without jsx
// const el = React.createElement('h1', { id: 'title' }, 'Hello Title')

// // with jsx
// const a = 10
// const el = <h1 id="title">Hello Title, {a}</h1>

// const el = (
//     <div>
//         <h1>Hello React</h1>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui
//             officiis, blanditiis ea sit, nesciunt laudantium perferendis
//             accusantium inventore illo consectetur amet atque fugiat ipsa
//             necessitatibus soluta debitis eligendi eos.
//         </p>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui
//             officiis, blanditiis ea sit, nesciunt laudantium perferendis
//             accusantium inventore illo consectetur amet atque fugiat ipsa
//             necessitatibus soluta debitis eligendi eos.
//         </p>
//     </div>
// )
const App = () => {
    return (
        <div>
            <h1>hello world</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                voluptate, quisquam in adipisci beatae quos facilis, voluptatum
                possimus labore quia, nulla distinctio nesciunt voluptatibus
                vero fugiat atque sequi quam! Tempore?
            </p>
        </div>
    )
}
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
