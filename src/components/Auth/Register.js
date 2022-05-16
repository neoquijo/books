import { useSelector } from 'react-redux'
import { Animate } from '../../Animations/aMain'
import { RegChat } from '../RegChat/RegChat'
import { Button, Title } from '../UI'
import css from './Auth.module.css'
import { Welcome } from './Welcome'
export const Register = () => {
    const startRegistration = useSelector(s=>s.nav.startRegistration)
    return (
        <div style={!startRegistration?{background:'white'}:{}} className={css.register}>
            <Animate precense={!startRegistration} animation='opacity'>
                <Welcome />
            </Animate>

            <Animate precense={startRegistration} animation='opacity'>
                <RegChat/>
            </Animate>


        </div>
    )
}