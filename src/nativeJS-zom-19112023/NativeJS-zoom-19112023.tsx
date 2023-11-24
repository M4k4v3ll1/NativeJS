import React from 'react';

type stydentType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
}

type students = Array<stydentType>

const NativeJsZoom19112023 = () => {
    const students = [
        {
            name: "Bob",
            age: 22,
            isMarried: true,
            scores: 85,
        },
        {
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 89
        },
        {
            name: "Nick",
            age: 20,
            isMarried: false,
            scores: 120
        },
        {
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ];

    const names = ["Bob", "Alex", "Nick", "John"]

    const getNames = (array: stydentType) => {
        const result = []
        const getMapped = (el) => el.name
        for (let i = 0; i < array.length; i++) {
            result[i] = getMapped(array[i])
        }
        return result
    }

    

    return (
        <div>
            {students[0].name}
        </div>
    );
};

export default NativeJsZoom19112023;