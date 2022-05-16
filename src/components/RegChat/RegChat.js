import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { APushMessage, ASetInputValue, ASetTempName } from '../../store/actions/authActions'
import css from './Chat.module.css'
import { Messages } from './Messages'
export const RegChat = () => {
    const [inputValue, setInputValue] = useState()
    const dispatch = useDispatch()
    const state = useSelector(s => s.auth)
    const { registrationStatus } = state
    const inputEvent = () => {
        switch (registrationStatus) {
            case 'welcome':
                dispatch(ASetTempName(inputValue))
                dispatch(APushMessage({ type: 'incoming', status: 'checkName' }))
                setInputValue('')
            default: return null
        }
    }
    const handleInput = () => {
        if (inputValue) {
            dispatch(ASetInputValue(inputValue))
            dispatch(APushMessage({ type: 'sent', status: 'welcome', payload: inputValue }))

            inputEvent()
        }
    }

    return (
        <div className={css.wrapper}>
            <div className={css.chatField}>
                <Messages />

            </div>
            <div className={css.input}>
                <input value={inputValue} onKeyDown={e => e.key === 'Enter' ? handleInput() : null} onChange={e => setInputValue(e.target.value)} autoFocus className={css.inputField} />
                <FontAwesomeIcon onClick={e => handleInput()} size='2x' color={inputValue ? '#0094f694' : 'grey'} className={css.send} icon={faPaperPlane} />
            </div>



        </div>
    )
}