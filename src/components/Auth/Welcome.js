import { useDispatch } from "react-redux"
import { APushMessage } from "../../store/actions/authActions"
import { AStartRegistration } from "../../store/actions/navActions"
import { Button, Title } from "../UI"
import css from './Auth.module.css'
export const Welcome = () => {
    const dispatch = useDispatch()
    const startRegistration = () => {
        dispatch(AStartRegistration())
        setTimeout(() => {
            dispatch(APushMessage({ type: 'incoming', status: 'askName' }))
        }, 1000)
    }
    return (
        <div className={css.welcome}>
            <Title color={'black'}>
                Первый раз у нас?
            </Title>

            <Button onClick={() => startRegistration()}>
                Начать регистрацию
            </Button>
        </div>
    )
}