import React from 'react';

type NewComponentPropsType = {
    students: Array<studentsPropsType>
    topCars: topCarsPropsType[]
}

type topCarsPropsType = {
    manufacturer: string,
    model: string
}

type studentsPropsType = {
    id: number,
    name: string,
    age: number
}


export const NewComponent: React.FC<NewComponentPropsType> = (props) => {
    return (
        <>
            <table>
                <th>
                    {props.topCars.map((objectFromTopCarsArray, index) => {
                        return (
                            <tr key={index}>
                                <span>{index + 1}. {objectFromTopCarsArray.manufacturer}</span>
                                <span>: {objectFromTopCarsArray.model}</span>
                            </tr>
                        )
                    })}
                </th>
            </table>
            <ul>
                {props.students.map((objectFromStudentArray, index) => {
                    return (
                        <li key={index}>
                            <span>{objectFromStudentArray.name}</span>
                            <span>age: {objectFromStudentArray.age}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};