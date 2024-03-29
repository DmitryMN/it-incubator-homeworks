import React from 'react'
import {AffairType} from './HW2';
import affairStyle from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType 
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }// need to fix

    return (
        <div>
            <span>{props.affair.name}</span>
            <button className={affairStyle.btn_delete} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
