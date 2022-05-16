import { faArrowAltCircleDown, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Alert, notification } from 'antd'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { doLogin } from '../../api'
import { Title, Button } from '../UI/index'
import css from './AuthModal.module.css'
import { RegDialog } from './Dialog/RegDialog'

export const LoginForm = () => {

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()


    return (
        <motion.div onClick={e => e.stopPropagation(2)} initial={{ x: '100vh' }} animate={{ x: 0 }} exit={{x:'100vh'}} className={css.loginForm}>
            <div className={css.register}>

                <div className={css.title}>
                    Первый раз на сайте? давай знакомиться! {<FontAwesomeIcon icon={faArrowAltCircleDown} />}
                </div>
                <RegDialog/>




            </div>
            <div className={css.login}>
                <Title color='black'>Уже есть учётная запись?</Title>
                <input onChange={e => setLogin(e.target.value)} className={css.inputLogin} placeholder='Логин, телефон или имейл' type='text' />
                <input onChange={e => setPassword(e.target.value)} className={css.inputPass} placeholder='Пароль' type='password'/>
                <Button>Войти</Button>
            </div>
        </motion.div>
    )
}