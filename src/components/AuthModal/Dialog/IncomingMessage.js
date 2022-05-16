import { faCheckDouble, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import css from './Dialog.module.css'
export const IncomingMessage = ({ status, delivered, st , bottomRef}) => {
    useEffect(()=> { 
        if(bottomRef)
        bottomRef.scrollIntoView()
    },[bottomRef])
    const [green, setGreen] = useState(delivered)
    if (!st) setTimeout(() => setGreen(true), 3000)
    switch (status) {
        case 'welcome':
            return <div className={css.incoming}>
                Добро пожаловать на сайт любителей почитать!)
                Раскажи нам немного о себе, и мы с радостью поприветствум тебя в нашем тесном кругу.
                В дальнейшем вы сможете использовать свою учётную запись для общения с единомышлиниками, участия в оживленных обсуждениях и получении рекомендаций с учётом выших литературных предпочтений.
                {<FontAwesomeIcon size='xs' color={green ? 'green' : 'grey'} icon={faCheckDouble} />}

                <div className={css.arrow}></div>

            </div>

        case 'askName':
            return <div className={css.incoming}>
                Как тебя зовут? Введи полное имя и мы сможем продолжить наше знакомство!
                {<FontAwesomeIcon size='xs' color={green ? 'green' : 'grey'} icon={faCheckDouble} />}

                <div className={css.arrow}></div>

            </div>
        case 'gotEmail':
            return <div className={css.incoming}>

                {<FontAwesomeIcon size='xs' color={green ? 'green' : 'grey'} icon={faCheckSquare} />}

                <div className={css.arrow}></div>

            </div>

        default:
            break;
    }
}