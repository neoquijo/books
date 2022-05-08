import { useParams } from 'react-router-dom'
import css from './Book.module.css'
export const BookInfo = (book) => {
    const params = useParams()
    
    return(
        <div className={css.wrapper}>
            {params.id}
        </div>
    )
}