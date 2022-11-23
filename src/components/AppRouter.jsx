import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import ErrorScreen from "../helpers/ErrorScreen";
import Kanban from "./Kanban";
import Login from "./Login";
import Logout from "./Logout";
import NavBar from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <NavBar />
        <div className="container">
        <Routes>
          <Route path="/" element={ <Kanban /> } />
          <Route path="/logout" element={ <Logout /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="*" element={ <ErrorScreen error={404} message={'Pagina no encontrada 😅'} /> } />
        </Routes>
        </div>
      </>
    </Router>
  )
}

export default AppRouter