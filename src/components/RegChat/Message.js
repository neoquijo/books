import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Animate } from '../../Animations/aMain'
import { AConfirmName } from '../../store/actions/authActions'
import css from './Chat.module.css'
export const Message = ({ type, status, payload }) => {

    const dispatch = useDispatch()
    const bottom = useRef()
    useEffect(() => {
        bottom.current.scrollIntoView()
    }, [])
    const state = useSelector(s => s.auth)
    const incomingMessage = (status) => {

        switch (status) {
            case 'welcome':
                return <Animate animation={'dialogIn'}> <div className={css.incoming}>
                    Добро пожаловать на сайт любителей почитать!)
                    Раскажи нам немного о себе, и мы с радостью поприветствум тебя в нашем тесном кругу.
                    В дальнейшем вы сможете использовать свою учётную запись для общения с единомышлиниками, участия в оживленных обсуждениях и получении рекомендаций с учётом выших литературных предпочтений.
                    <div className={css.arrow}></div>
                </div>

                </Animate>
            case 'askName':
                return <Animate animation={'dialogIn'}>
                    <div className={css.incoming}>
                        Как тебя зовут? Введи полное имя и мы сможем продолжить наше знакомство!
                        <div className={css.arrow}></div>
                    </div>
                </Animate>
            case 'checkName':
                return <Animate animation={'dialogIn'}>
                    <div className={css.incoming}>
                        Тебя действительно зовут {state.tempName}?
                        {state.nameConfirmed == null && <div><button onClick={e => dispatch(AConfirmName())}>Да{state.nameConfirmed}</button><button>нет</button></div>}
                        <div className={css.arrow}></div>
                    </div>
                </Animate>
            case 'askPhone':
                return <Animate animation={'dialogIn'}>
                    <div className={css.incoming}>
                        Здорово! теперь
                        <div className={css.arrow}></div>
                    </div>
                </Animate>

            default: return null
        }
    }

    const sentMessage = (value) => {
        return <div className={css.sent}>{value}</div>
    }

    const switchType = (type, status, payload) => {

        switch (type) {
            case 'incoming':
                return incomingMessage(status)
            case 'sent':
                return sentMessage(payload)
            default: return null
        }
    }
    return (<>
        {switchType(type, status, payload)}
        <div ref={bottom}></div>
    </>)
}