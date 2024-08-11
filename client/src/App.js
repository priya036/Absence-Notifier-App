import {
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import StudentInfo from './Pages/StudentInfo';
import AdminRegistrationSucess from './Pages/AdminRegistrationSucess';
import SendSms from './Pages/Sendmessage';
import ImageUploader from './Pages/getimage';
import ImageToTextConverter from './Pages/imagetotext';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/studentinfo' element={<StudentInfo/>}></Route> 
        <Route path='/regisucess' element={<AdminRegistrationSucess/>}></Route> 
        <Route path='/sms' element={<SendSms/>}></Route>  
        <Route path='/image' element={<ImageUploader/>}></Route>
        <Route path='/imtxt' element={<ImageToTextConverter/>}></Route>        

      </Routes>
    </BrowserRouter>
  );
}
export default App;
