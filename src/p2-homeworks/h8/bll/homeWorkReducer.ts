import {ActionType, UserType} from "../HW8";


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            let copyState = state.map(user => ({...user}));
            let collator = new Intl.Collator("ru");
            copyState.sort((a: UserType, b: UserType) => {
                return collator.compare(a.name, b.name);
            });
            return action.payload === 'up' ? copyState : copyState.reverse();
        }
        case 'check': {
            return state.filter(user => user.age > action.payload);
        }
        default:
            return state
    }
}