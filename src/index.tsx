import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Content from './Content'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const App = () => {
    return (
        <>
            <Header title="App.js" num={10} />
            <Header title="React.js" />
            <Content p1="Hello world 1" p2="Hello world 2" bgColor="purple" />
            <Content p1="Hello world 3" p2="Hello world 4" bgColor="red" />
            <Content p1="Hello world 5" p2="Hello world 6" />
        </>
    )
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
