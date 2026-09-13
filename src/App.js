import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import LoginPage from "./pages/login/LoginPage";
import {Route, Routes} from "react-router";
import HomePage from "./pages/home/HomePage";
import NoMatchPage from "./pages/noMatch/NoMatchPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
      <>
      <Routes>
          <Route exact path="/" element={<Layout/>}>
              <Route index element={<HomePage Page/>}/>
              <Route path={"login"} element={<LoginPage/>}/>
              <Route path={"*"} element={<NoMatchPage/>}/>
          </Route>
      </Routes>
      </>
  );
}

export default App;
