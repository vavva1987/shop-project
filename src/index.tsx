import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const Content = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Header title="App.js" num={10} />
            <Header title="React.js" />
            <Content />
        </>
    )
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
