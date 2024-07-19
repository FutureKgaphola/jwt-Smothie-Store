
//import './App.css'
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import AddItem from './Pages/AddItem'
import NoPage from './Pages/NoPage'
import Layout from './Layouts/Layout'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import { SignUpaction } from './formAction/SignUpAction'
import { LoadSmothies } from './Loaders/LoadSmothies'
import { AddSmothie } from './formAction/AddSmothie'
import {LoginAction} from './formAction/LoginAction'
import SmothieError from './Error/SmothieError'
import SignupError from './Error/SignupError'
import LoadingSmothieError from './Error/LoadingSmothieError'
import LoginError from './Error/LoginError'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={LoadSmothies} errorElement={<LoadingSmothieError/>}/>
      <Route path="AddItem" element={<AddItem />} action={AddSmothie} errorElement={<SmothieError/>}/>
      <Route path="Login" element={<Login />} action={LoginAction} errorElement={<LoginError/>}/>
      <Route path='SignUp' element={<SignUp />} action={SignUpaction} errorElement={<SignupError/>}/>
      <Route path="*" element={<NoPage />} />
    </Route>

  )
);
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
