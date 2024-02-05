import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import NoteEdit from './components/NoteEdit';
import UserSettings from './components/UserSettings';

function App() {
  return (
	
    <>
		<BrowserRouter>
			<div>
				<Routes>
					<Route path='/' element={<Welcome/>}/>
					<Route path='/dashboard' element={<Dashboard/>}>
						<Route path='/dashboard/:id' element={<NoteEdit/>}/>
						<Route path='/dashboard/settings' element={<UserSettings/>}/>
					</Route>
					<Route path='/login' element={<Login/>}/>
					<Route path='/register' element={<Register/>}/>
				</Routes>
			</div>
		</BrowserRouter>
		<ToastContainer />
    </>
  )
}

export default App;


