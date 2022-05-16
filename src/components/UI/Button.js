import { Children } from 'react'
import css from './UI.module.css'
export const Button = ({children, onClick}) => {
    return(
        <div onClick={onClick} className={css.button}>
            {children}
        </div>
    )
}