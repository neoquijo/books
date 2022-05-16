
import { useSelector } from 'react-redux'
import css from './Navbar.module.css'
import { ResultItem } from './ResultItem'
export const SearchResult = () => {
    const searchResults = useSelector(state => state.search.searchResult)
    const unique = []
    const removeDuplicated = (item) => {
        if (unique.includes(item.volumeInfo.title)) return false
        else unique.push(item.volumeInfo.title)
        return true
    }
    return (



        <div className={css.searchResult}>
            {searchResults ?

                searchResults.filter(item => removeDuplicated(item)).map(book =>
                    <div key={book.title}>
                        <ResultItem item={book} />
                    </div>)
                :
                <div>

                </div>}
        </div>
    )
}