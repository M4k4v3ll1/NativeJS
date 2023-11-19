import React from 'react';

export const MetodFilter = () => {

    const ages: Array<number> = [18, 20, 22, 1, 100, 90, 14]
    const oldAges: Array<number> = ages.filter(a => a > 90)

    type CourseType = {
        title: string
        price: number
    }

    const courses: Array<CourseType> = [
        {title: 'css', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}
    ]

    let lowPriceCourses: Array<CourseType> = courses.filter(c => c.price < 160)



    return (
        <div>
            <ul>
                <li>{oldAges}</li>
                {lowPriceCourses.map(lowPriceCourses => {
                    return <li>{lowPriceCourses.title} cost {lowPriceCourses.price}</li>
                })}
            </ul>
        </div>
    );
};
