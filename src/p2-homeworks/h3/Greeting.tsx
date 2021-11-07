import React, {ChangeEvent} from 'react';

import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}) => {
    const inputClass = error ? s.error : "";

    return (
        <div>
            <input value={name} onChange={setNameCallback} onBlur={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <span className={s.span_error}>{error}</span>
        </div>
    )
}

export default Greeting
