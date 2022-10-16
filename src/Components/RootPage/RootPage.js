import {createBrowserRouter} from "react-router-dom";
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import RecoverPasswordPage from "../RecoverPasswordPage/RecoverPasswordPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import About from "../About/About";
import Layout from "../../Layout/Layout";

export const router = createBrowserRouter([
    {path:'/', element: <Layout></Layout>, children: [
        {path:'/', element:<Home></Home>},
        {path:'login', element: <LoginPage></LoginPage>},
        {path:'registration', element: <RegisterPage></RegisterPage>},
        {path:'about', element: <About></About>},
        {path:'recover', element: <RecoverPasswordPage></RecoverPasswordPage>}, 
    ]},
])

