import "./Notifications.css"
import { ReactComponent as NotificationIcon } from "../../assets/icons/notificationIcon.svg"
import {useState} from "react";
import {NotificationBar} from "../NotificationBar/NotificationBar";



export const Notifications = () => {
    const [show,setShow] = useState(false)

    return (
        <div>
            <NotificationIcon onClick={()=>{
                setShow(!show)
            }} className='icon' />

            <NotificationBar className={show ? 'listtransition' : ''}/>

        </div>



    )
}