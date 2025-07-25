import { 
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";



import { Landing } from "./pages/Landing";  
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";

function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<Landing />} />

        
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />

    
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
