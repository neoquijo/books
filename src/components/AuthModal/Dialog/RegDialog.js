import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Button } from '../../UI'
import css from './Dialog.module.css'
import { ADialogMessage } from '../../../Animations/aMain'
import { IncomingMessage } from './IncomingMessage'
import { RegInputField } from './RegInputField'
import { useSelector } from 'react-redux'
export const RegDialog = () => {

    const [startRegForm, setStartRegForm] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [status, setStatus] = useState('welcome')
    const bottomDiv = useRef(null)
    const authState = useSelector(s => s.auth)
    const [messages, setMessages] = useState(['askName'])
    
    return (<>
        <div className={css.wrapper}>
            <ADialogMessage option={{ transition: { delay: .5 } }}>
                <IncomingMessage status='welcome' delivered={startRegForm} />
            </ADialogMessage>
            {messages.map(el=>{
                return (
                    <ADialogMessage option={{ transition: { delay: .5 } }}>
                    <IncomingMessage bottomRef={bottomDiv.current} status={el} delivered={startRegForm} />
                </ADialogMessage>
                )
            })}
            {startRegForm && <>
                <ADialogMessage>
                    
                    <IncomingMessage bottomRef={bottomDiv.current} status='askName' />
                </ADialogMessage>
                {authState.tempName &&
                    <ADialogMessage>
                        
                        <IncomingMessage bottomRef={bottomDiv.current} status='welcome' />
                    </ADialogMessage>
                }

                

            </>}
            <div ref={bottomDiv}></div>

        </div>

        {!startRegForm && <motion.div exit={{ x: 100, opacity: 0 }} className={css.start}>
<Button onClick={()=>setMessages([...messages,'welcome'])}></Button>
            <Button onClick={e => { setStartRegForm(true) }}>Начать регистрацию!</Button>
        </motion.div>}


        {startRegForm && <RegInputField setCurrent={() => { }} />
        }
    </>)
}