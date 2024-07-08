import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import React from 'react'

import Home from './pages/home'

import './index.css'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/home",
		element: <Home />
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
