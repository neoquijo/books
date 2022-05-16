import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { ADiv } from '../../Animations/ADiv'
import { AShowLoginModal } from '../../store/actions/navActions'
import css from './AuthModal.module.css'
import { LoginForm } from './LoginForm'

export const AuthModal = () => {
    const dispatch = useDispatch()

    return (

        <motion.div onClick={() => dispatch(AShowLoginModal())} animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0, x: 10, transition: { duration: .2 } }} className={css.wrapper}>
            <LoginForm />

        </motion.div>

    )
}