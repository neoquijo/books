import css from './UI.module.css'

export const SubTitle = ({children}) => {
    return(
        <div className={css.subTitle}>
            {children}
        </div>
    )
}