import { useState } from "react"
import { useSelector } from "react-redux"
import { Message } from "./Message"

export const Messages = () => {
    const messages = useSelector(s => s.auth.messages)

    return (
        <div>
            {messages.map(el =>
                <Message type={el.type} status={el.status} payload={el.payload} />)}
        </div>
    )
}