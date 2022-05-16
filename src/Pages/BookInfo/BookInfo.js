import { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AFetchDisplayBook, ASetDisplayBook } from '../../store/actions/navActions'
import { setDisplayBook } from '../../store/actions/types'

import css from './Book.module.css'
export const BookInfo = () => {
    const dispatch = useDispatch()

    const params = useParams()

    useEffect(() => {
        dispatch(AFetchDisplayBook(params.id))
    }, [params.id])
    const item = useSelector(s => s.nav.displayBook)


    return (<>
        <div className={css.wrapper}>
            <div className={css.top}>
                <div>
                    <div className={css.thumbnail}>
                        <img src={item?.imageLinks?.thumbnail} alt={item?.title + ' Обложка'}></img>
                    </div>
                    <div className={css.bookAuthors}>
                        {item?.authors? item.authors.map(el => <div>{el}</div>):<div>Автор не известен</div>}
                    </div>
                </div>
                <div>
                    <div className={css.bookTitle}>{item?.title}</div>
                    <div className={css.bookDescription}>{item?.description} </div>
                </div>
            </div>



        </div>
        <div>
            algo
        </div>
        </>)
}