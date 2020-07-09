import React , {forwardRef}  from 'react'
import {Card, CardContent, Typography} from '@material-ui/core';
import '../cssStyle/message.css'

const Message = forwardRef((props,ref) => {
    const {username, message} = props.message

    const isUser = props.username === username

    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "user_message" : "guest_message"}>
                <CardContent>
                    <Typography
                    variant="h5"
                    component="h2"
                    >
                    {!isUser && `${username || 'Unknown User'}: `} {message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
