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
const Header = () => {
    return <h1>Hello world</h1>
}
const Content = () => {
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis vitae in tempore laborum veniam natus maiores minus? Ut
                facere commodi tempora quia temporibus dolorem, nobis, incidunt
                assumenda expedita ipsam debitis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis vitae in tempore laborum veniam natus maiores minus? Ut
                facere commodi tempora quia temporibus dolorem, nobis, incidunt
                assumenda expedita ipsam debitis.
            </p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Header />
            <Content />
        </div>
    )
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
