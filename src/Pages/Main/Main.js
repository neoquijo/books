import { Navbar } from '../../components/Navbar/Navbar'
import { RecFull } from '../../components/Recomendations/RecFull'
import css from './Main.module.css'
export const Main = () => {
    return(
        <div className={css.wrapper}>
           <RecFull/>
        </div>
    )
}