import request from "supertest";
import app from "../../app";

describe("Test express book feature", () => {
    test("'Get all books' should respond to GET method", async () => {
        const response = await request(app).get('/api/books');
        expect(response.statusCode).toBe(200);
    })

    test("'Should include 2 books", async () => {
        const response = await request(app).get('/api/books');
        expect(response.body).toStrictEqual("Express + Typescript");
    })
})