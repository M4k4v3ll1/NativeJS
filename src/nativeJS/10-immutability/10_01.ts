export type UserType = {
    name: string
    hair: number
    address: AddressType
};

type AddressType = {
    city: string
    house?: number
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: string[]
}
export type WithCompaniesType = {
    companies: CompanyType[]
}
export type CompaniesType = {
    [key: string]: CompanyType[]
}
type CompanyType = {
    id: number
    title: string
}

export function makeHairstyle(u: UserType, power: number) {
    return {...u, hair: u.hair / power}
}
export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, city}}
}
export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u, address: {...u.address, house}}
}
export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {...u, laptop: {...u.laptop, title}}
}
export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return  {...u, books: [...u.books, book]}
}
export function updateBooksToUser(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return  {...u, books: u.books.map(b => b === oldBook ? newBook : b )}
}
export function removeBookFromUser(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return  {...u, books: u.books.filter(b => b !== book)}
}
export function addCompanyToUser(u: UserWithLaptopType & WithCompaniesType, company: CompanyType) {
    return  {...u, companies: [...u.companies, company]}
}
export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType, id: number, title: string) {
    return  {...u, companies: u.companies.map(c => c.id === id ? {...c, title} : c)}
}
export function updateCompanyTitleForArtem(c: CompaniesType, userName: string, id: number, title: string) {
    return  {...c, [userName]: c[userName].map(el => el.id === id ? {...el, title} : el)}
}