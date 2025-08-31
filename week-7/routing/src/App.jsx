import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
const Dashboard = lazy(()=> import("./pages/Dashboard"))
const Landing = lazy(()=> import("./pages/Landing"))

function App() {
  return (
    <div>
      <BrowserRouter>
      <Appbar/>
    <Routes>
      <Route path="/dashboard" element={<Suspense fallback={"loading..."} ><Dashboard/></Suspense>} ></Route>
      <Route path="/" element={<Suspense fallback={"loading..."} ><Landing/></Suspense>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
function Appbar() {
    const navigate = useNavigate();
  return <div>
    <div>
        <button onClick={()=>{
          navigate("/");
        }}>Landing</button>
        <button onClick={()=>{
          navigate("/dashboard");
        }}>Dashboard</button>
      </div>
  </div>
}

export default App
