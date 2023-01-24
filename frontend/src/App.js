import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import Nav from './components/nav/Nav'
import HomePage from './pages/homePage/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DetailDiscussionPage from './pages/detailDiscussionPage/DetailDiscussionPage'

const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: 'gray.200',
            },
        }),
    },
})
function App() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider cssVarsRoot='body' theme={theme}>
                <Router>
                    <Nav />
                    <Routes>
                        <Route exact path='/' element={<HomePage />} />
                        
                        <Route path='/discussions/:id' element={<DetailDiscussionPage/>}/>

                    </Routes>
                </Router>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default App
