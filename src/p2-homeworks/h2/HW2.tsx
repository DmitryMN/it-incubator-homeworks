import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = "high" | "low" | "middle" 

export type AffairType = {
    _id: number;
    name: string;
    priority: string;
} 
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ 
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => { 
    if (filter === 'all') {
        return affairs
    } else if(filter === "high") {
        return affairs.filter(elem => elem.priority === "high");
    } else if(filter === "middle") {
        return affairs.filter(elem => elem.priority === "middle");
    } else if (filter === "low") {
        return affairs.filter(elem => elem.priority === "low");
    }
}
// delete Affair
export const deleteAffair = (affairs: Array<AffairType>, _id: number): any => { 
    return affairs.filter(affair => affair._id !== _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); 
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
