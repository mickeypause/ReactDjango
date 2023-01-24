import React, { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import Store from './redux/Store'
import { Provider } from 'react-redux'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
    <StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
    </StrictMode>
)
