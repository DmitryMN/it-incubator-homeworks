import React, {useState, ChangeEvent} from 'react';
import Greeting from './Greeting';
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let valueTransform = e.currentTarget.value.trim();
        if(valueTransform) {
            setName(valueTransform);
            error && setError('')
        } else {
            setName('');
            setError('name is require')
        }
    }

    const addUser = () => {
        addUserCallback(name);
        alert(`Hello ${name} !`)
        setName('');
    }

    const totalUsers: number = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
