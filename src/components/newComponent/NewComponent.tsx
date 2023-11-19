import React, {FC} from 'react';
import {studentType, topCarType} from "../../App";

type NewComponentPropsType = {
    students: Array<studentType>
    topCars: Array<topCarType>
}

export const NewComponent: FC<NewComponentPropsType> = ({topCars, students}) => {
    const newTopCars: Array<JSX.Element> = [];
    for (let i = 0; i < topCars.length; i++) {
        let topCar: JSX.Element = <li>
            {topCars[i].manufacturer}. model {topCars[i].model}
        </li>
        newTopCars.push(topCar)
    }

    return (
        <>
            <ul>
                {students.map(s => {
                    return <li>{s.id}. {s.name}: {s.age} years</li>
                })}
            </ul>
            <ul>
                {newTopCars}
                {/*{topCars.map(c => {
                    return <li>
                        {c.manufacturer} model {c.model}
                    </li>
                })}*/}
            </ul>
        </>
    );
};
