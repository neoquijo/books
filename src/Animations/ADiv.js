import { motion } from "framer-motion"

export const ADiv = (props) => {
    const { children } = props

    return (
        <motion.div  {...props}>
            {children}
        </motion.div>
    )
}