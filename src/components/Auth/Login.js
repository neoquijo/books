import { Button, Title } from '../UI'
import css from './Auth.module.css'
export const Login = () => {
    return(
        <div className={css.login}>
                        <div className={css.login}>
                <Title color='black'>Уже есть учётная запись?</Title>
                <input  className={css.inputLogin} placeholder='Логин, телефон или имейл' type='text' />
                <input  className={css.inputPass} placeholder='Пароль' type='password'/>
                <Button>Войти</Button>
            </div>
        </div>
    )
}