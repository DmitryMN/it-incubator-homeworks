import React from 'react';
import messageCss from './Message.module.css';


type TypePropsMessage = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: TypePropsMessage) {
    return (
        <div className={messageCss.message_container}>
            <div className={messageCss.img_container}>
                <div className={messageCss.imgbg_small}>
                    <div className={messageCss.imgbg_big}>
                        <img className={messageCss.avatar} src={props.avatar} alt="avatar"/>
                    </div>   
                </div>             
            </div>
            <div className={messageCss.text_container}>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <div className={messageCss.time_container}>
                    <span>{props.time}</span>
                </div>                
            </div>    
        </div>
    )
}

export default Message