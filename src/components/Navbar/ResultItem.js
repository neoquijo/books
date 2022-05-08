
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AHideSearchResultBody } from '../../store/actions/navActions'
import css from './Navbar.module.css'
export const ResultItem = ({item}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = (id)=>{
        dispatch(AHideSearchResultBody())
        navigate('/book/'+id)
    }

    return(
        <div onClick={()=>handleClick(item.id)} className={css.resultItem}>
            <div className={css.bookTitle}>
             {item.volumeInfo.title}
            </div>
            <div className={css.bookAuthors}>
             {item.volumeInfo.authors?.map(el=>{
                 return <div className={css.author}>
                     {el}
                 </div>
             })}
            </div>
            <div>
                {item?.volumeInfo?.imageLinks?.thumbnail &&
                <img alt={item.volumeInfo.title+' Обложка'} src={item.volumeInfo.imageLinks.smallThumbnail}></img>    
            }
            </div>
        </div>
    )
}