import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import RecoverPasswordPage from "../RecoverPasswordPage/RecoverPasswordPage";
import RegisterPage from "../RegisterPage/RegisterPage";

export const router = createBrowserRouter([
    {path:'/', element: <LoginPage></LoginPage>},
    {path:'registration', element: <RegisterPage></RegisterPage>},
    {path:'recover', element: <RecoverPasswordPage></RecoverPasswordPage>},
])

