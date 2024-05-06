
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
};