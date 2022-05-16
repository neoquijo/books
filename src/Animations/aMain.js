import { AnimatePresence, motion } from "framer-motion"
import { ADiv } from "./ADiv"


const aOpacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}




const aDialogMessageIn = {
    
    initial: {
        opacity: 0,
        x: '-100vh'
    },
    enter: {
        opacity: 1,
        x: 0
    }
}

const aRightLeftRight = {
    initial:{
        x:'100vh'
    },
    enter:{
        x:0
    },
    exit:{
        x:'150vh'
    }
}

// export const AnimDialogMessage = ({ children, option }) => {
//     return <motion.div {...option} variants={aDialogMessage} initial='initial' animate='enter'>
//         {children}
//     </motion.div>
// }

export const Animate = ({ animation, options, children, precense }) => {
    const getAnimation = (value) => {
        switch (value) {
        case 'opacity':
            return (
                <ADiv
                    {...options}
                    variants={aOpacity}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                >{children}
                </ADiv>)
        case 'dialogIn':
            return (
                <ADiv
                    {...options}
                    variants={aDialogMessageIn}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                >{children}
                </ADiv>)
        case 'rightLeftRight':
            return (
                <ADiv
                    {...options}
                    variants={aRightLeftRight}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                >{children}
                </ADiv>)
        default: return null
    }
}
if (precense!==undefined) return (
        <AnimatePresence>
        {precense &&
            getAnimation(animation)
        }
    </AnimatePresence>
)
else return getAnimation(animation)
}