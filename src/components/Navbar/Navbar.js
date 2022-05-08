import css from './Navbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {ReactComponent as HomeIcon} from '../../assets/svg/home.svg'
import {ReactComponent as SearchIcon} from '../../assets/svg/search.svg'
import {ReactComponent as PlusIcon} from '../../assets/svg/plus.svg'
import {ReactComponent as HeartIcon} from '../../assets/svg/heart.svg'
import {ReactComponent as ProfileIcon} from '../../assets/svg/profile.svg'
import {ReactComponent as BookIcon} from '../../assets/svg/book.svg'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { SearchResult } from './SearchResult'
import { AFetchBooksByName, ASetQuery} from '../../store/actions/searchActions'
import { AHideSearchResultBody, AShowSearchResultBody } from '../../store/actions/navActions'


export const Navbar = () => {
    const dispatch = useDispatch()
    const searchBodyRef = useRef()
    const searchQuery = useSelector(state=>state.search.query)
    const showResults = useSelector(state=>state.nav.showSearchResultBody)

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (searchBodyRef.current && !searchBodyRef.current.contains(event.target)) {
            dispatch(AHideSearchResultBody())
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [searchBodyRef]);


    const [showSearchBody, setSearchShow] = useState(false)

    
    
    const handleSearchInput = async (value) => {
        dispatch(ASetQuery(value))
        dispatch(AFetchBooksByName(value))
    }
    return(

        <div className={css.wrapper}>
        
            <div className={css.logo}>
                <img width={50} height='50' alt='Логотип' src='/logo192.png'/>
            </div>
            <div className={css.search}>
                
                <input onChange={e=>handleSearchInput(e.target.value)} onFocus={e=>dispatch(AShowSearchResultBody())} placeholder='Поиск' className={css.input} type='text'></input>
                
                {showResults && <motion.div initial={{
                    y:'100px',
                    x:'-100px',
                    opacity:0
                }}
                transition={{duration:'.2' }}
                animate={{
                    x:0,
                    y:'0',
                    opacity:1
                }}
                className={css.searchResultBody} ref={searchBodyRef}>
                    <SearchResult/>
                </motion.div>}
            </div>
            <div className={css.controls}>
                <HomeIcon/>
                <SearchIcon/>
                <PlusIcon/>
                <HeartIcon/>
                <ProfileIcon/>
                <BookIcon/>
            </div>
        </div>
    )
}