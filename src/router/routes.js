import { Login } from "../Pages/Auth/Login/Login";
import { Register } from "../Pages/Auth/Register/Register";
import { BookInfo } from "../Pages/BookInfo/BookInfo";
import { Main } from "../Pages/Main/Main";

export const routes = [
    {
        to:'/',
        title:'Главная страница',
        component:Main
    },
    {
        to:'/login',
        title:'Вход в личный кабинет',
        component: Login
    },
    {
        to:'/register',
        title:'Зарегистриолваь учётную запись',
        component: Register
    },
    {
        to:'/book/:id',
        title:'',
        component: BookInfo
    }
]