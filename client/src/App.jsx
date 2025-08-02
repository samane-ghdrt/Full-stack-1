import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './component/TodoList'
import NavbarMenu from './component/NavbarMenu'
import Sidebar from './component/Sidebar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Task from './component/Task'

function App() {
 return(<>

<Sidebar/>
<NavbarMenu/>
<BrowserRouter>
<Routes>
  <Route path='/' element=""></Route>
  <Route path='/important tasks' element={<Task/>}></Route>
  <Route path='/Completed tasks' element=""></Route>
  <Route path='/Uncompleted tasks' element=""></Route>
</Routes>

</BrowserRouter>

 </>)
}

export default App
