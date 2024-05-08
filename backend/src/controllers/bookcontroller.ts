
const create = async () => {

}
const readAll = async () => {
    
}
const read = async () => {
    
}
const update = async () => {
    
}
const deleteOne = async () => {
    
}


export const getAllBooks = (req: any, res: any) => {
    res.json({totalBooks: 2, books: [
        {
            author: "Sebbe",
            title: "The green book",
            pages: 394
        },
        {
            author: "Thomas",
            title: "The blue book",
            pages: 584
        }
    ]});
}

export const addBook = (req: any, res:any) => {

}
export const getBook = (req: any, res:any) => {
    
}
export const updateBook = (req: any, res:any) => {
    
}
export const deleteBook = (req: any, res:any) => {
    
}