import {
    addNewBooksToUser,
    removeBookFromUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse,
    updateBooksToUser,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType,
    WithCompaniesType,
    addCompanyToUser,
    updateCompanyTitle,
    CompaniesType,
    updateCompanyTitleForArtem
} from "./10_01";

test("reference type test", () => {
    let user: UserType = {
        name: "Daniil",
        hair: 32,
        address: {city: "Minsk"},
    };

    const awesomeUser = makeHairstyle(user, 2);

    expect(user.hair).toBe(32);
    expect(awesomeUser.hair).toBe(16);
    expect(awesomeUser.address).toBe(user.address);
});

test("change address test", () => {
    let user: UserWithLaptopType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {title: 'Vivobook'}
    };

    const movedUser = moveUser(user, 'Orel');

    expect(user).not.toBe(movedUser);
    expect(user.hair).toBe(32);
    expect(movedUser.hair).toBe(32);
    expect(user.address.city).toBe('Minsk');
    expect(movedUser.address.city).toBe('Orel');
    expect(user.laptop.title).toBe('Vivobook');
    expect(user.laptop.title).toBe(movedUser.laptop.title);
});

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {title: 'Vivobook'}
    };

    const upgradedUser = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(upgradedUser);
    expect(user.hair).toBe(32);
    expect(upgradedUser.hair).toBe(32);
    expect(user.address.city).toBe('Minsk');
    expect(upgradedUser.address.city).toBe(user.address.city);
    expect(upgradedUser.laptop.title).not.toBe(user.laptop.title);
    expect(upgradedUser.laptop.title).toBe('Macbook');
    expect(user.laptop.title).toBe('Vivobook');
});

test("move user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Vivobook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const movedUser = moveUserToOtherHouse(user, 99);

    expect(user).not.toBe(movedUser);
    expect(user.hair).toBe(movedUser.hair);
    expect(user.address).not.toBe(movedUser.address);
    expect(movedUser.address.city).toBe(user.address.city);
    expect(movedUser.address.house).not.toBe(user.address.house);
    expect(movedUser.address.house).toBe(99);
    expect(movedUser.laptop.title).toBe(user.laptop.title);
    expect(movedUser.books).toBe(user.books);
});

test("add new books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Vivobook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const smartUser = addNewBooksToUser(user, 'ts');

    expect(user).not.toBe(smartUser);
    expect(user.hair).toBe(smartUser.hair);
    expect(user.address).toBe(smartUser.address);
    expect(smartUser.address.city).toBe(user.address.city);
    expect(smartUser.address.house).toBe(user.address.house);
    expect(smartUser.laptop.title).toBe(user.laptop.title);
    expect(smartUser.books).not.toBe(user.books);
    expect(smartUser.books[4]).toBe('ts');
});
test("update 'js' to 'ts' in books", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Vivobook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const smartUser = updateBooksToUser(user, 'js', 'ts');

    expect(user).not.toBe(smartUser);
    expect(user.hair).toBe(smartUser.hair);
    expect(user.address).toBe(smartUser.address);
    expect(smartUser.address.city).toBe(user.address.city);
    expect(smartUser.address.house).toBe(user.address.house);
    expect(smartUser.laptop.title).toBe(user.laptop.title);
    expect(smartUser.books).not.toBe(user.books);
    expect(smartUser.books[2]).toBe('ts');
    expect(smartUser.books.length).toBe(4);
});
test("remove 'js' book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Vivobook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const smartUser = removeBookFromUser(user, 'js');

    expect(user).not.toBe(smartUser);
    expect(user.hair).toBe(smartUser.hair);
    expect(user.address).toBe(smartUser.address);
    expect(smartUser.address.city).toBe(user.address.city);
    expect(smartUser.address.house).toBe(user.address.house);
    expect(smartUser.laptop.title).toBe(user.laptop.title);
    expect(smartUser.books).not.toBe(user.books);
    expect(smartUser.books[2]).not.toBe('js');
    expect(smartUser.books[2]).toBe('react');
    expect(smartUser.books.length).toBe(3);
});

test("add new company to User", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Vivobook'
        },
        companies: [
            {
                id: 1,
                title: 'Epam'
            },
            {
                id: 2,
                title: 'IT-Incubator'
            }
        ]
    };

    const sucsessedUser = addCompanyToUser(user, {id: 3, title: 'Google'});

    expect(user).not.toBe(sucsessedUser);
    expect(user.hair).toBe(sucsessedUser.hair);
    expect(user.address).toBe(sucsessedUser.address);
    expect(sucsessedUser.address.city).toBe(user.address.city);
    expect(sucsessedUser.address.house).toBe(user.address.house);
    expect(sucsessedUser.laptop.title).toBe(user.laptop.title);
    expect(sucsessedUser.companies).not.toBe(user.companies);
    expect(sucsessedUser.companies[2].title).toBe('Google');
});

test("update company title", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Daniil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Vivobook'
        },
        companies: [
            {
                id: 1,
                title: 'Epam'
            },
            {
                id: 2,
                title: 'IT-Incubator'
            }
        ]
    };

    const sucsessedUser = updateCompanyTitle(user, 1, 'Google');

    expect(user).not.toBe(sucsessedUser);
    expect(user.hair).toBe(sucsessedUser.hair);
    expect(user.address).toBe(sucsessedUser.address);
    expect(sucsessedUser.address.city).toBe(user.address.city);
    expect(sucsessedUser.address.house).toBe(user.address.house);
    expect(sucsessedUser.laptop.title).toBe(user.laptop.title);
    expect(sucsessedUser.companies).not.toBe(user.companies);
    expect(sucsessedUser.companies[0].title).toBe('Google');
});
test("update company title", () => {
    let companies: CompaniesType = {
        'Daniil': [
            {
                id: 1,
                title: 'Epam'
            },
            {
                id: 2,
                title: 'IT-Incubator'
            }
        ],
        'Artem': [
            {
                id: 1,
                title: 'Sharash-Montazh'
            },
            {
                id: 2,
                title: 'Sberbank'
            }
        ],
    }

    const changedCompanies = updateCompanyTitleForArtem(companies, 'Artem', 1, 'VTB');

    expect(companies).not.toBe(changedCompanies);
    expect(changedCompanies['Artem'][0].title).toBe('VTB');
    expect(changedCompanies['Artem'][1].title).toBe('Sberbank');
});