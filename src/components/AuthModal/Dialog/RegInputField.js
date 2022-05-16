import { useDispatch } from 'react-redux'
import { ASetTempName } from '../../../store/actions/authActions'
import { setTempName } from '../../../store/actions/types'
import css from './Dialog.module.css'
export const RegInputField = ({ setCurrent, value }) => {
    const dispatch = useDispatch()
    return (
        <div className={css.inputField}>
            Имя мне
            <input placeholder='' onChange={e => dispatch(ASetTempName(e.target.value))} type='text'>

            </input>
            , рад знакомству!
        </div>
    )
}