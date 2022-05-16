import css from './UI.module.css'
export const Title = ({children, color}) => {
    return(
        <div style={{color:color}} className={css.title}>
            {children}
        </div>
    )
}