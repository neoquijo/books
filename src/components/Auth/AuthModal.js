import { useDispatch, useSelector } from 'react-redux'
import { Animate } from '../../Animations/aMain'
import { AShowLoginModal } from '../../store/actions/navActions'
import css from './Auth.module.css'
import { Login } from './Login'
import { Register } from './Register'
export const AuthModal = () => {
    const dispatch = useDispatch()
    const loginModal = useSelector(s=>s.nav.loginModal)
    
    return(
        
            <div onClick={e=>dispatch(AShowLoginModal())}  className={css.wrapper}>
                <Animate precense={loginModal} animation='rightLeftRight'>
                    <div onClick={e=>e.stopPropagation()} className={css.formBody}>
                        
                            <Register/>
                        
                        <Login/>
                    </div>
                </Animate>
            </div>
        
    )
}