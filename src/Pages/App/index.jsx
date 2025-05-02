import {useRoute} from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../Signin'
import './App.css'

const AppRoutes = () => { 
  let router = useRoute([
    {
      path: '/',
      element: <Home />,
    }
  ])
  return router
}

const App = () => {
  return (
    
    
  )
}

export default App
