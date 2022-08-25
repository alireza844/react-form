import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="w-screen h-screen bg-slate-800 text-white">

      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/*" element={<Navigate to="/signup"/>}/>
        {/* <Route path="/" element={<Navigate to="/signup"/>} /> */}
      </Routes>

    </div>
  );
}

export default App;
