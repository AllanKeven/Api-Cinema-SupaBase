const request = require("supertest");
const app = require("../app");

// Definições
// DESCRIBE: Agrupa testes relacionados
// test/it: Define um caso de teste individual

describe("Bateria de testes para a API de filmes", () => {
    test("Deve buscar os filmes e retornar status 200 e um array", async () => {
        const response = await request(app).get("/movies");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        return
    })
})