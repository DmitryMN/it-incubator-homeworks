import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer';
import {UserType} from "../../HW8";

let initialState: Array<UserType>

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'});
    expect(newState[5].name).toBe('Кот');
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'});
    expect(newState[5].name).toBe('Александр');
})
test('check age ', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18});
    expect(newState.filter(p => p.age > 18).length).toBe(4);
})
