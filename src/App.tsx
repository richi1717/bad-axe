import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './features/home/HomePage'
import ShopPage from './features/shop/ShopPage'
import LocationPage from './features/location/LocationPage'
import ContactPage from './features/contact/ContactPage'
import PracticesPage from './features/practices/PracticesPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'practices', element: <PracticesPage /> },
      { path: 'location', element: <LocationPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
