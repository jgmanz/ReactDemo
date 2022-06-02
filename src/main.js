import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { App } from "./landing";
import Login from "./login/login";


export default function Main() {
    return ( 
        <Router>
            <Routes>
                <Route extract path='/' element={<App />}  />
                <Route extract path='/login' element={<Login />} />
                <Route extract path='/catalogos/:id' element={<Login />} />
            </Routes>
        </Router>
    )
}